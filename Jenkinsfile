pipeline{
    agent any
    tools{
        nodejs 'node'
    }
    stages{
        stage("Check node version"){
            steps{
                sh 'node -v'
            }
        }
        stage("Clone Repo"){
            steps{
                git(
                    url: "https://github.com/Naspwon/jenkins-demo.git",
                    branch: "main"
                )
            }
        }
        stage("Install dependencies"){
            steps{
                sh 'npm install'
            }
        }
        stage("Running test"){
            steps{
                echo "Running Tests"
            }
        }
        stage("Running app locally"){
            steps{
                sh 'nohup node index.js &'
            }
        }
        stage('Deploy to Heroku'){
            steps{
                withCredentials([usernameColonPassword(credentialsId: 'd5bbd3e7-e7e1-4c78-b704-4b7d51276e9a', variable: 'HEROKU_CREDENTIALS')]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@https://git.heroku.com/jenkin-demo.git main'
                }
            }
        }
        
    }

}