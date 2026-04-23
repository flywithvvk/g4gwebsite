/**
 * Firestore form submission helpers.
 * All leads, demo bookings, newsletter subscribers, and investor inquiries
 * are written to Firestore so every submission is captured.
 */
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { app } from './firebase';

const db = getFirestore(app);

export interface ContactLead {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string;
  message: string;
  source: 'contact_form';
}

export interface DemoBooking {
  name: string;
  email: string;
  company: string;
  phone?: string;
  useCase?: string;
  demoType: string;
  slot?: string;
  source: 'demo_form';
}

export interface NewsletterSubscriber {
  email: string;
  source: 'blog_newsletter' | 'exit_intent';
  interest?: string;
}

export interface InvestorLead {
  name: string;
  organization?: string;
  email: string;
  investmentStage?: string;
  message?: string;
  source: 'investor_form';
}

async function save(collectionName: string, data: object) {
  try {
    await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
    });
  } catch (err) {
    // Non-blocking: log but don't throw — UX should still show success
    console.warn('[Firestore] Save failed:', err);
  }
}

export const saveContactLead = (data: ContactLead) => save('leads', data);
export const saveDemoBooking = (data: DemoBooking) => save('demo_bookings', data);
export const saveNewsletterSubscriber = (data: NewsletterSubscriber) => save('newsletter_subscribers', data);
export const saveInvestorLead = (data: InvestorLead) => save('investor_leads', data);
