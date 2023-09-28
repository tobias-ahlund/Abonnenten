import { NextResponse, NextRequest } from "next/server";
import webpush, { PushSubscription } from 'web-push';
import {
    getSubscriptionsFromDb,
    saveSubscriptionToDb,
} from '@/utils/db/in-memory-db'

let privateKey = process.env.VAPID_PRIVATE_KEY
let publicKey = process.env.VAPID_PUBLIC_KEY

if (!privateKey || !publicKey) {
    console.log(
      'Warning: VAPID public or private key not defined, generating one'
    )
    const vapidKeys = webpush.generateVAPIDKeys()
    publicKey = vapidKeys.publicKey
    privateKey = vapidKeys.privateKey
}

webpush.setVapidDetails(
    'mailto:test@example.com',
    publicKey,
    privateKey
)

export async function POST(request: NextRequest) {
    // this gets executed whenever a POST request is made to /api/push
    const subscription = (await request.json()) as PushSubscription | null

    if (!subscription) {
      console.error('No subscription was provided!')
      return
    }
  
    const updatedDb = await saveSubscriptionToDb(subscription)
  
    return NextResponse.json({ message: 'success', updatedDb })
}

export async function GET(request: NextRequest) {
    const subscriptions = await getSubscriptionsFromDb()

    subscriptions.forEach((s) => {
      const payload = JSON.stringify({
        title: 'WebPush Notification!',
        body: 'Hello World',
      })
      webpush.sendNotification(s, payload)
    })
  
    return NextResponse.json({
      message: `${subscriptions.length} messages sent!`,
    })
}