// generic message zesty slack #engagement-leads
export default async function slackNotify(message){
    message = encodeURIComponent(message);
    await fetch(`https://us-central1-zesty-dev.cloudfunctions.net/slackNotify?message=${message}`);
}