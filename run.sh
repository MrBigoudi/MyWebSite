#!/bin/bash

# run the project

# project folder
dir="MyPortfolio"

run(){
    mode=$1
    cd ${dir}
    npm run ${mode}
    cd ..
}

deploy(){
    cd ${dir}
    firebase deploy
    cd ..
}

# parse arguments
option=$1
case $option in
    "--dev" )
        run "dev";;
    "--build" )
        run "build"
        deploy;;
    * )
        echo "usage : $0 <option>"
        echo
        echo "option : "
        echo -e "\t--dev    : to run in dev mode"
        echo -e "\t--build  : to run in build mode";;
esac
echo