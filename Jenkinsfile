pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Install') {
            steps {
                bat 'npm install '
            }
        }
        stage('Run tests') {
                parallel {
                    stage('PMVC test') {
                        steps {
                            bat 'npm run cy:tests'
                            //echo 'echo running E2E PMVC tests'
                        }
                    }
                    stage('FRAM test') {
                        steps {
                            bat 'npm run cy:tests'
                           // echo 'echo running e2e FRAM tests'
                        }
                    }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
    Post {
    sucess {
        publishHTML (target : [allowMissing: false,
         alwaysLinkToLastBuild: true,
         keepAll: true,
         reportDir: 'reports',
         reportFiles: 'myreport.html',
         reportName: 'My Reports',
         reportTitles: 'The Report'])
            }
          }
}
