import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'your-email@example.com', // Replace with your email
          subject: `New message from ${email}`,
          text: message,
          html: `<p>From: ${email}</p><p>${message}</p>`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
      />
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
        required
        rows={5}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>
      {status === 'success' && (
        <p className="text-green-500">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}
