import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await addDoc(collection(db, "prelaunch_emails"), {
        email,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      console.error("Firebase error:", err);
      // Provide more specific error messages
      if (err?.code === "permission-denied") {
        setError("Permission denied. Please check Firestore security rules.");
      } else if (err?.code === "unavailable") {
        setError("Service unavailable. Please check your internet connection.");
      } else if (err?.message) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={handleSubmit} className='shadow-md rounded-xl flex'>
        <input 
          type="email" 
          placeholder='Enter your email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className='h-12 w-80 rounded-l-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' 
        />
        <button 
          type="submit"
          disabled={loading}
          className='h-12 w-32 bg-blue-500 text-white rounded-r-xl hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {loading ? "..." : success ? "✓" : "Notify Me"}
        </button>
      </form>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {success && <p className="text-green-500 text-sm mt-2">Thank you! We'll notify you soon.</p>}
    </div>
  );
}
