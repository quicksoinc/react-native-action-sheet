import _extends from"@babel/runtime/helpers/extends";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/danielgilbert/workspace/react-native-action-sheet/src/ActionSheet/TouchableNativeFeedbackSafe.tsx";import*as React from'react';import{Platform,TouchableNativeFeedback,TouchableOpacity,View}from'react-native';var CustomTouchableOpacity=function(_React$Component){_inherits(CustomTouchableOpacity,_React$Component);function CustomTouchableOpacity(){_classCallCheck(this,CustomTouchableOpacity);return _possibleConstructorReturn(this,_getPrototypeOf(CustomTouchableOpacity).apply(this,arguments));}_createClass(CustomTouchableOpacity,[{key:"render",value:function render(){return React.createElement(TouchableOpacity,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:17}}),this.props.children);}}]);return CustomTouchableOpacity;}(React.Component);CustomTouchableOpacity.SelectableBackground=function(){return{};};CustomTouchableOpacity.SelectableBackgroundBorderless=function(){return{};};CustomTouchableOpacity.Ripple=function(color,borderless){return{};};var TouchableComponent=Platform.select({web:CustomTouchableOpacity,ios:CustomTouchableOpacity,default:Platform.Version<=20?CustomTouchableOpacity:TouchableNativeFeedback});var TouchableNativeFeedbackSafe=function(_React$Component2){_inherits(TouchableNativeFeedbackSafe,_React$Component2);function TouchableNativeFeedbackSafe(){_classCallCheck(this,TouchableNativeFeedbackSafe);return _possibleConstructorReturn(this,_getPrototypeOf(TouchableNativeFeedbackSafe).apply(this,arguments));}_createClass(TouchableNativeFeedbackSafe,[{key:"render",value:function render(){if(TouchableComponent===TouchableNativeFeedback){return React.createElement(TouchableComponent,_extends({},this.props,{style:{},__source:{fileName:_jsxFileName,lineNumber:41}}),React.createElement(View,{style:this.props.style,__source:{fileName:_jsxFileName,lineNumber:42}},this.props.children));}return React.createElement(TouchableComponent,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:48}}),this.props.children);}}]);return TouchableNativeFeedbackSafe;}(React.Component);TouchableNativeFeedbackSafe.SelectableBackground=TouchableComponent.SelectableBackground;TouchableNativeFeedbackSafe.SelectableBackgroundBorderless=TouchableComponent.SelectableBackgroundBorderless;TouchableNativeFeedbackSafe.Ripple=TouchableComponent.Ripple;export{TouchableNativeFeedbackSafe as default};
//# sourceMappingURL=TouchableNativeFeedbackSafe.js.map