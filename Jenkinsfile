pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                //echo 'Building..'
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
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
           }
         }
}
