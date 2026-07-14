"use client";

export default function ContactForm() {
  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const date = (form.elements.namedItem("date") as HTMLInputElement).value;
        const type = (form.elements.namedItem("eventType") as HTMLSelectElement).value;
        const msg = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
        const text = `Hi AK Photography!%0A%0AName: ${name}%0AEmail: ${email}%0ADate: ${date}%0AEvent: ${type}%0AMessage: ${msg}`;
        window.open(`https://wa.me/919963716293?text=${text}`, "_blank");
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-[0.1em] font-semibold text-muted mb-3">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-transparent border-b border-border/60 px-0 py-3 text-sm text-primary placeholder:text-muted/30 outline-none focus:border-gold transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.1em] font-semibold text-muted mb-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-transparent border-b border-border/60 px-0 py-3 text-sm text-primary placeholder:text-muted/30 outline-none focus:border-gold transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-[0.1em] font-semibold text-muted mb-3">
            Event Date
          </label>
          <input
            type="date"
            name="date"
            className="w-full bg-transparent border-b border-border/60 px-0 py-3 text-sm text-primary outline-none focus:border-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.1em] font-semibold text-muted mb-3">
            Event Type
          </label>
          <select
            name="eventType"
            defaultValue=""
            className="w-full bg-transparent border-b border-border/60 px-0 py-3 text-sm text-primary outline-none focus:border-gold transition-colors"
          >
            <option value="" disabled>Select type</option>
            <option value="Wedding">Wedding</option>
            <option value="Engagement">Engagement</option>
            <option value="Pre-Wedding">Pre-Wedding</option>
            <option value="Baby-Shoot">Baby Shoot</option>
            <option value="Birthday">Birthday</option>
            <option value="Couple">Couple</option>
            <option value="Family">Family</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.1em] font-semibold text-muted mb-3">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full bg-transparent border-b border-border/60 px-0 py-3 text-sm text-primary placeholder:text-muted/30 outline-none focus:border-gold transition-colors resize-none"
          placeholder="Tell us about your vision, venue, and what matters most to you..."
        />
      </div>

      <button type="submit" className="btn-primary">
        <span>Send Enquiry on WhatsApp</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}
