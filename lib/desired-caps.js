import { commonCapConstraints } from 'appium-android-driver';

let uiautomatorCapConstraints = {
  app: {
    presence: true,
    isString: true,
  },
  automationName: {
    isString: true,
  },
  browserName: {
    isString: true
  },
  launchTimeout: {
    isNumber:true
  }
};

let desiredCapConstraints = {};
Object.assign(desiredCapConstraints, uiautomatorCapConstraints,
              commonCapConstraints);

export default desiredCapConstraints;