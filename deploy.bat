aws s3 rm s3://renhosoft.net.jamskitchen --recursive

aws s3 sync ./dist/ s3://renhosoft.net.jamskitchen --exclude "*.js"
aws s3 sync ./dist/ s3://renhosoft.net.jamskitchen --include "*.js" --content-type "application/javascript"