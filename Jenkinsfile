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
                git{
                    url: 'https://github.com/Naspwon/jenkins-demo',
                    branch: 'main'
                }
            }
        }
        stage("Install dependencies"){
            steps{
                sh 'npm install'
            }
        }
        stage("Running tests"){
            steps{
                echo "Running Tests"
            }
        }
        stage("Running app locally"){
            steps{
                sh 'nohup node index.js &'
            }
        }
        
    }

}