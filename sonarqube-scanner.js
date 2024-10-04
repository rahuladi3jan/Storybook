// eslint-disable-next-line @typescript-eslint/no-var-requires
const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "https://sonarqube.storybookfinance.com/",
    options: {
      "sonar.login": "admin",
      "sonar.password": "mayank",
      "sonar.projectName": "storybook-storybook-ui",
      "sonar.projectDescription": "Storybook  UI Project Sonarlint",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.sources": "src",
      "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
      "sonar.exclusions": "node_modules",
      "sonar.tests": "src",
      "sonar.testExecutionReportPaths": "test-report.xml",
      "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.eslint.reportPaths": "eslint-result.json",
    },
  },
  () => process.exit()
);
