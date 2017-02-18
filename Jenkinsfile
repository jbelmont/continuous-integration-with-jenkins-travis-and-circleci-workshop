#!groovy

pipeline {
    agent { docker 'node:6.9.1' }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
