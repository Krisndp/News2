package com.push;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import com.facebook.react.ReactActivity;
import com.microsoft.codepush.react.CodePush;

public class MainActivity extends ReactActivity {

  private ReactRootView mReactRootView;
  //rivate ReactInstanceManager mReactInstanceManager;

  // @Override
  // protected void onCreate(Bundle savedInstanceState) {
  //   mReactInstanceManager = ReactInstanceManager.builder()
  //       // ...
  //       // Add CodePush package
  //       .addPackage(new CodePush("deployment-key-here", getApplicationContext(), BuildConfig.DEBUG))
  //       // Get the JS Bundle File via Code Push
  //       .setJSBundleFile(CodePush.getJSBundleFile())
  //       // ...

  //       .build();
  //   mReactRootView.startReactApplication(mReactInstanceManager, "MyReactNativeApp", null);

  //   setContentView(mReactRootView);
  // }

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Push";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
