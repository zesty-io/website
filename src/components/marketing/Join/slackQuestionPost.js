import { getCookie } from 'cookies-next';

// post to zesty slack #engagement-leads
export default async function slackQuestionPost(question,answer,email='unknown'){
    let payload = {
        "question": question,
        "answer": answer,
        "path": getCookie('referrer') ? getCookie('referrer') : window.location.href,
        "email": email
    }
    try{
        await fetch('https://us-central1-zesty-prod.cloudfunctions.net/onboardQuestion', {
            method: 'POST',
            credentials: 'omit',
            body:    JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err){
        console.log("failed to post to slack",err)
    }
}