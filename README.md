# Alloy Toast Widget [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://appcelerator.com/alloy/)

Another [Alloy](http://appcelerator.com/alloy) [Widget](http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Widgets) for a cross-platform in-app Android toast-like notification system. On Android it wraps `Ti.UI.Notification` while on iOS (and others) it's a `Ti.UI.Window` containing a label.

## Screencasts

![iOS](https://github.com/FokkeZB/nl.fokkezb.toast/blob/master/screencasts/ios.png?raw=true) ![Android](https://github.com/FokkeZB/nl.fokkezb.toast/blob/master/screencasts/android.png?raw=true)

## Get it [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/nl.fokkezb.toast)

Install via [gitTio](http://gitt.io/component/nl.fokkezb.toast):

	$ gittio install nl.fokkezb.toast

Or download a [release](https://github.com/FokkeZB/nl.fokkezb.toast/releases), extract it to your app's `app/widgets/nl.fokkezb.toast` folder and add the dependency to your `config.json`:

	{
		..
		"dependencies": {
		    "nl.fokkezb.toast": "*"
		    ..
		  }
	}
	
## Use it

### Global instance

#### alloy.js

	Alloy.Globals.toast = Alloy.createWidget('nl.fokkezb.toast', 'global', {
		// defaults
	}).show;
	
##### index.js

	Alloy.Globals.toast('hello world');
	
### Local instances

#### index.js

	Alloy.createWidget('toast').show('hello world');
	
## Style it

Use the [classes](styles/widget.tss) in your `themes/yourTheme/widgets/nl.fokkezb.toast/styles/widget.tss` (Alloy 1.4.0+) or `styles/app.tss` to style the views and also set the entry and exit properties to animate on iOS.

## Todo
Feel free to send PRs for these or other features:

* Support built-in and custom levels that can be themed (info, error..).
* Support queueing instead of overlaying multiple messages.
* Support stacking instead of overlaying multiple messages.
* Support tap-to-close instead of only auto-close.

## Alternatives
Other widgets and why they didn't work for me:

|Widget|Didn't work for me because|
|------|-----------------|
|[net.beyondlink.toast](http://gitt.io/component/net.beyondlink.toast)|Nice features, but themes not styleable|
|[com.mcongrove.toast](http://gitt.io/component/com.mcongrove.toast)|Position and animation not stylable|

## License

	The MIT License (MIT)
	
	Copyright (c) 2014 Fokke Zandbergen
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.