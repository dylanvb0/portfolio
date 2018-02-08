ng build --prod
gcloud compute ssh instance-1 --command 'rm /var/www/dylanvb.me/public/*'
gcloud compute scp dist/* dylan@instance-1:/var/www/dylanvb.me/public/
