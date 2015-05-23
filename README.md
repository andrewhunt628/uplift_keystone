
# Uplift ROI Readme


## To update your site:

1.  Clone a local copy off of github, https://github.com/andrewhunt628/uplift_keystone

2.  Copy the .env.example to a .env file and setup the .env file for local development

3.  Make your changes and commit (to the master branch)

4.  Push your changes to the github repo, git push origin master

5.  SSH into your server (  ssh root@upliftroi.com )

6.  Navigate to /webapp   (   cd /webapp )

7.  Pull the source code from github:  git pull origin master

8.  Restart the process manager:  pm2 restart keystone
