import {
  onCurrentUserSubscriptionUpdate,
  Subscription,
} from '@stripe/firestore-stripe-payments';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import payments from '../lib/stripe';

const useSubscription = (user: User | null) => {
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  useEffect(() => {
    if (!user) return;

    //listener to track the user subscription
    onCurrentUserSubscriptionUpdate(payments, (snapshot) => {
      setSubscription(
        snapshot.subscriptions.filter(
          (subscription) =>
            subscription.status === 'active' ||
            subscription.status === 'trialing'
        )[0]
      );
    });
  }, [user]);

  return subscription;
};

export default useSubscription;
