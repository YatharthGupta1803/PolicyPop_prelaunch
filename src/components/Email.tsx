import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function Email() {
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
    <form  onSubmit={handleSubmit} className='border-2 border-gray-200 h-38 w-85 py-3 px-3'>
      <input 
        type="email" 
        placeholder='Enter your email address' 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        className='w-78 h-12 px-4 border-2 border-gray-200 rounded-2xl' 
      />
      <button 
        type="submit"
        disabled={loading}
        className='bg-black text-white px-30 py-3 rounded-2xl mt-4 font-medium shadow-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
      >
        {loading ? "Submitting..." : success ? "Subscribed!" : "Notify Me"}
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {success && <p className="text-green-500 text-sm mt-2">Thank you! We'll notify you soon.</p>}
    </form>
  );
}
