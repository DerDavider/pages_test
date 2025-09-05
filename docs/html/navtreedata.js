/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Thermal Camera SDK", "index.html", [
    [ "Overview", "index.html", "index" ],
    [ "Features", "features.html", [
      [ "Contents", "features.html#autotoc_md1", null ],
      [ "Overview", "features.html#features-overview", null ],
      [ "Programming Languages", "features.html#features-programming-languages", null ],
      [ "Supported Cameras", "features.html#features-supported-cameras", [
        [ "PI 160", "features.html#autotoc_md2", null ],
        [ "PI 400(i)", "features.html#autotoc_md3", null ],
        [ "PI 450i", "features.html#autotoc_md4", null ],
        [ "PI 640(i)", "features.html#autotoc_md5", null ],
        [ "PI 05M", "features.html#autotoc_md6", null ],
        [ "PI 08M", "features.html#autotoc_md7", null ],
        [ "PI 1M", "features.html#autotoc_md8", null ],
        [ "Xi 80", "features.html#autotoc_md9", null ],
        [ "Xi 400", "features.html#autotoc_md10", null ],
        [ "Xi 410(MT)", "features.html#autotoc_md11", null ],
        [ "Xi 440", "features.html#autotoc_md12", null ],
        [ "Xi 640", "features.html#autotoc_md13", null ],
        [ "Xi 1M", "features.html#autotoc_md14", null ]
      ] ]
    ] ],
    [ "Installation", "installation.html", [
      [ "Contents", "installation.html#autotoc_md15", null ],
      [ "Download", "installation.html#installation-download", null ],
      [ "Windows", "installation.html#installation-windows", null ],
      [ "Linux (Ubuntu LTS)", "installation.html#installation-ubuntu", null ]
    ] ],
    [ "Basic Usage", "basic-usage.html", [
      [ "Contents", "basic-usage.html#autotoc_md16", null ],
      [ "First Steps", "basic-usage.html#basic-usage-first-steps", [
        [ "Display Window", "basic-usage.html#basic-usage-first-steps-display-window", null ],
        [ "Terminal Window", "basic-usage.html#basic-usage-first-steps-terminal-window", null ]
      ] ],
      [ "Startup Process", "basic-usage.html#basic-usage-startup-process", [
        [ "Locate a Device", "basic-usage.html#basic-usage-startup-process-locate-a-device", null ],
        [ "Load The Configuration", "basic-usage.html#basic-usage-startup-process-load-the-configuration", null ],
        [ "Establish The Device Connection", "basic-usage.html#basic-usage-startup-process-establish-the-device-connection", null ],
        [ "Load The Calibration", "basic-usage.html#basic-usage-startup-process-load-the-calibration", null ],
        [ "Determine The Operation Mode", "basic-usage.html#basic-usage-startup-process-determine-the-operation-mode", null ],
        [ "Startup Calibration", "basic-usage.html#basic-usage-startup-process-startup-calibration", null ]
      ] ],
      [ "Device Configuration", "basic-usage.html#basic-usage-device-configuration", [
        [ "Device Connection", "basic-usage.html#basic-usage-device-configuration-device-connection", null ],
        [ "Optics, Temperature Ranges, Video Formats", "basic-usage.html#basic-usage-device-configuration-optics-temperature-ranges-video-formats", [
          [ "Optics", "basic-usage.html#autotoc_md17", null ],
          [ "Temperature Ranges", "basic-usage.html#autotoc_md18", null ],
          [ "Video Formats", "basic-usage.html#autotoc_md19", null ]
        ] ]
      ] ],
      [ "Command Line Tools", "basic-usage.html#basic-usage-command-line-tools", [
        [ "otc_configure_ethernet", "basic-usage.html#basic-usage-command-line-tools-otc-configure-ethernet", null ],
        [ "otc_find_devices", "basic-usage.html#basic-usage-command-line-tools-otc-find-devices", null ],
        [ "otc_version", "basic-usage.html#basic-usage-command-line-tools-otc-version", null ]
      ] ]
    ] ],
    [ "Start Developing", "start-developing.html", [
      [ "Contents", "start-developing.html#autotoc_md20", null ],
      [ "Which Language to Choose?", "start-developing.html#start-developing-which-language-to-choose", null ],
      [ "Toolchains", "start-developing.html#start-developing-toolchains", [
        [ "C++", "start-developing.html#start-developing-toolchains-cpp", null ],
        [ "C Sharp", "start-developing.html#start-developing-toolchains-csharp", null ],
        [ "Python 3", "start-developing.html#start-developing-toolchains-python3", null ]
      ] ],
      [ "Project Integration", "start-developing.html#start-developing-project-integration", [
        [ "C++", "start-developing.html#start-developing-project-integration-cpp", [
          [ "CMake", "start-developing.html#autotoc_md21", null ],
          [ "Visual Studio Project", "start-developing.html#autotoc_md22", null ]
        ] ],
        [ "C Sharp", "start-developing.html#start-developing-project-integration-csharp", null ],
        [ "Python 3", "start-developing.html#start-developing-project-integration-python3", null ]
      ] ],
      [ "Public API", "start-developing.html#start-developing-public-api", [
        [ "Architecture", "start-developing.html#start-developing-public-api-architecture", null ],
        [ "Retrieving Thermal Data", "start-developing.html#start-developing-public-api-retrieving-thermal-data", null ],
        [ "Creating False Color Images", "start-developing.html#start-developing-public-api-creating-false-color-images", null ]
      ] ]
    ] ],
    [ "Important Files", "important-files.html", [
      [ "Contents", "important-files.html#autotoc_md23", null ],
      [ "Configuration", "important-files.html#important-files-configuration", null ],
      [ "Calibration", "important-files.html#important-files-calibration", null ],
      [ "Normalization", "important-files.html#important-files-normalization", null ],
      [ "Formats Definitions", "important-files.html#important-files-format-definitions", null ],
      [ "Dynamic Dead Pixels", "important-files.html#important-files-dynamic-dead-pixels", null ]
    ] ],
    [ "Device Communication", "device-communication.html", [
      [ "Contents", "device-communication.html#autotoc_md24", null ],
      [ "Overview", "device-communication.html#device-communication-overview", null ],
      [ "USB", "device-communication.html#device-communication-usb", [
        [ "Control", "device-communication.html#device-communication-usb-control", null ],
        [ "Streaming", "device-communication.html#device-communication-usb-streaming", null ]
      ] ],
      [ "Ethernet", "device-communication.html#device-communication-ethernet", [
        [ "Control", "device-communication.html#device-communication-ethernet-control", null ],
        [ "Streaming", "device-communication.html#device-communication-ethernet-streaming", null ]
      ] ]
    ] ],
    [ "Troubleshooting", "troubleshooting.html", [
      [ "Contents", "troubleshooting.html#autotoc_md25", null ],
      [ "Linux", "troubleshooting.html#troubleshooting-linux", [
        [ "User Groups", "troubleshooting.html#autotoc_md26", null ],
        [ "UVC Driver Settings", "troubleshooting.html#autotoc_md27", null ],
        [ "No device found", "troubleshooting.html#autotoc_md28", null ]
      ] ],
      [ "False Color Images", "troubleshooting.html#troubleshooting-false-color-images", [
        [ "Unexpected Colors", "troubleshooting.html#autotoc_md29", null ],
        [ "Tearing", "troubleshooting.html#autotoc_md30", null ]
      ] ],
      [ "Video Stream", "troubleshooting.html#autotoc_md31", null ]
    ] ],
    [ "Example Applications", "example-applications.html", [
      [ "Contents", "example-applications.html#autotoc_md32", null ],
      [ "Preparations", "example-applications.html#example-applications-preparations", null ],
      [ "Enumeration", "example-applications.html#example-applications-enumeration", null ],
      [ "Minimal", "example-applications.html#example-applications-minimal", null ],
      [ "Simple View", "example-applications.html#example-applications-simple-view", null ]
    ] ],
    [ "Changelog", "changelog.html", [
      [ "Contents", "changelog.html#autotoc_md33", null ],
      [ "Versions 10.x", "changelog.html#changelog_versions_10", [
        [ "Version 10.0.1", "changelog.html#autotoc_md34", null ],
        [ "Version 10.0.0", "changelog.html#autotoc_md35", null ]
      ] ]
    ] ],
    [ "Contact", "contact.html", [
      [ "Contents", "contact.html#autotoc_md36", null ],
      [ "Website", "contact.html#contact-website", null ],
      [ "E-Mail", "contact.html#contact-e-mail", null ],
      [ "GitHub", "contact.html#contact-github", null ]
    ] ],
    [ "↓ Code ↓", "code.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"Api_8h.html",
"classoptris_1_1EnumerationDetector.html#a71a8dcae142d5f45d4716ef5e8943db3",
"classoptris_1_1IRImager.html#ae8860de4fb7876f174f3e5b17a9072db",
"classoptris_1_1ImageInfo.html#af6859c53cafd628478a09dea56149022",
"classoptris_1_1ThermalFrame.html#a1200950bcc40b3de599912fcb4e0cb65",
"namespaceoptris.html#aafdfe9dc8c434a63aedc67450cb9a0d8abcd31d6365a8e9b67445f76929025d95"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';