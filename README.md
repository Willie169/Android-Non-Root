[![Repo Views](https://hits.dwyl.com/Willie169/Android-Non-Root.svg?style=flat)](http://hits.dwyl.com/Willie169/Android-Non-Root)
# Android-Non-Root
In this tutorial called **Android-Non-Root**, we'll explore a range of powerful, open-source tools to enhancing your Android device’s functionality, security, privacy, and customization without the need for root access.
## Table of Contents
- [Termux: a Powerful Terminal Emulation with an Extensive Linux Package Collection](#termux-a-powerful-terminal-emulation-with-an-extensive-linux-package-collection)
  - [Install Termux](#install-termux)
  - [Introduction of Termux](#introduction-of-termux)
  - [App User Interface](#app-user-interface)
  - [Package Management](#package-management)
  - [SIGINT (Signal Interrupt)](#sigint-signal-interrupt)
  - [Package Command Error](#package-command-error)
  - [Process completed (signal 9) - press Enter error](#process-completed-signal-9---press-enter-error)
- [Termux Graphical Environment with VNC Server, and Fluxbox or Openbox Windows Manager, or XFCE, LXQt, or MATE Desktop Environment](#termux-graphical-environment-with-vnc-server-and-fluxbox-or-openbox-windows-manager-or-xfce-lxqt-or-mate-desktop-environment)
  - [Enable the X11 Repository](#enable-the-x11-repository)
  - [VNC Server](#vnc-server)
  - [Fluxbox](#fluxbox)
  - [Openbox](#openbox)
  - [XFCE](#xfce)
  - [LXQt](#lxqt)
  - [MATE](#mate)
  - [Further Readings and References](#further-readings-and-references)
- [Andronix with Termux: Install Linux Distributions in Termux on Non-Rooted Android Devices](#andronix-with-termux-install-linux-distributions-in-termux-on-non-rooted-android-devices)
  - [Optional but Recommended: Install Andronix App](#optional-but-recommended-install-andronix-app)
  - [Introduction of Andronix and PRoot](#introduction-of-andronix-and-proot)
  - [Install an OS](#install-an-os)
  - [Uninstall an OS (Not Modded)](#uninstall-an-os-not-modded)
  - [Sound Output from PRoot OS](#sound-output-from-proot-os)
  - [Signal 9 Error](#signal-9-error)
  - [Example: Debian with XFCE Desktop Environment](#example-debian-with-xfce-desktop-environment)
  - [Example: Debian with CLI Only](#example-debian-with-cli-only)
  - [Example: Uninstallation of Debian OS (Not Modded)](#example-uninstallation-of-debian-os-not-modded)
  - [Note](#note)
- [QEMU System Emulation with Termux: Full System Emulation of Multiple CPU Architectures and Operating Systems with ISO Image Method or QCOW2 Cloud Image](#qemu-system-emulation-with-termux-full-system-emulation-of-multiple-cpu-architectures-and-operating-systems-with-iso-image-method-or-qcow2-cloud-image)
  - [Install QEMU](#install-qemu)
  - [ISO Image method](#iso-image-method)
  - [QCOW2 Image Method](#qcow2-image-method)
  - [Window Managers or Desktop Environments](#window-managers-or-desktop-environments)
  - [Login](#login)
  - [Resize Disk Space](#resize-disk-space)
  - [Check](#check)
  - [Signal 9 Error](#signal-9-error)
  - [Note](#note)
  - [Further Readings and References](#further-readings-and-references)
- [Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell](#shizuku-systemui-tuner-and-ashell-use-local-adb-of-android-device-on-terminals-such-as-termux-without-another-device-with-shizuku-leave-developer-options-off-when-doing-so-with-systemui-tuner-and-use-adb-with-features-like-autocomplete-suggestion-with-ashell)
  - [Install Shizuku](#install-shizuku)
  - [Introduction of Shizuku and ADB](#introduction-of-shizuku-and-adb)
  - [Connect Shizuku to Wireless ADB](#connect-shizuku-to-wireless-adb)
  - [Use Shizuku in a Terminal Application for the First Time (Termux for Example)](#use-shizuku-in-a-terminal-application-for-the-first-time-termux-for-example)
  - [Install SystemUI Tuner](#install-systemui-tuner)
  - [To Leave Developer Options off When Using Shizuku to Connect to ADB](#to-leave-developer-options-off-when-using-shizuku-to-connect-to-adb)
  - [Reconnect Shizuku in Case it Stops with SystemUI Tuner](#reconnect-shizuku-in-case-it-stops-with-systemui-tuner)
  - [Other SystemUI Tuner Usage](#other-systemui-tuner-usage)
  - [Using aShell](#using-ashell)
- [TrackerControl and InviZible Pro: Route Traffic through Tor, Block DNS over UDP, Set DNS Server, and Block Trackers](#trackercontrol-and-invizible-pro-route-traffic-through-tor-block-dns-over-udp-set-dns-server-and-block-trackers)
  - [Install InviZible Pro](#install-invizible-pro)
  - [Install TrackerControl](#install-trackercontrol)
  - [Use TrackerControl to Block Trackers](#use-trackercontrol-to-block-trackers)
  - [Configure TrackerControl (TC) to be used with InviZible Pro](#configure-trackercontrol-tc-to-be-used-with-invizible-pro)
  - [Configure InviZible Pro to be used with TrackerControl](#configure-invizible-pro-to-be-used-with-trackercontrol)
  - [Use Tor but not DNSCrypr of InviZible Pro](#use-tor-but-not-dnscrypr-of-invizible-pro)
  - [Use DNSCrypr But not Tor of InviZible Pro](#use-dnscrypr-but-not-tor-of-invizible-pro)
  - [Check](#check)
  - [Use Invizible Pro without TrackerControl](#use-invizible-pro-without-trackercontrol)
- [Tor Browser](#tor-browser)
  - [Install Tor Browser](#install-tor-browser)
  - [Introduction of Tor](#introduction-of-tor)
  - [NoScript Security Suite](#noscript-security-suite)
- [Promoted or Related Works, References, and Bibliography](#promoted-or-related-works-references-and-bibliography)
  - [Termux](#termux)
  - [Andronix](#andronix)
  - [Shizuku](#shizuku)
  - [SystemUI Tuner](#systemui-tuner)
  - [Invizible Pro](#invizible-pro)
  - [TrackerControl (also known as TC)](#trackercontrol-also-known-as-tc)
  - [NetGuard](#netguard)
  - [DontKillMyApp](#dontkillmyapp)
  - [aShell](#ashell)
  - [QEMU](#qemu)
  - [The Tor Project](#the-tor-project)
  - [MyIP/IPCheck.ing](#myipipchecking)
  - [Debian](#debian)
  - [Others](#others)
- [Contribution](#contribution)
- [License](#license)
---
## Termux: a Powerful Terminal Emulation with an Extensive Linux Package Collection
### Install Termux
- Download and Install **Termux** from F-Droid: [https://f-droid.org/packages/com.termux/](https://f-droid.org/packages/com.termux/).
- **Note**: It is recommended to use **Termux**'s F-Droid version and avoid using Google Play Store version because the latter is depreciated.
- Many of the following guides work on or depend on **Termux**.
- If you installed termux from Google Play Store or a very old version, then you will receive package command errors. Google Play Store builds are deprecated and no longer supported. It is highly recommended that you update to termux-app v0.118.0 or higher as soon as possible for various bug fixes, including a critical world-readable vulnerability reported at [https://termux.github.io/general/2022/02/15/termux-apps-vulnerability-disclosures.html](https://termux.github.io/general/2022/02/15/termux-apps-vulnerability-disclosures.html). It is recommended that you shift to F-Droid or Github releases.
### Introduction of Termux
- Termux is an Android terminal application and Linux environment. Termux combines powerful terminal emulation with an extensive Linux package.
collection.
  - Enjoy the bash and zsh shells.
  - Edit files with nano and vim.
  - Access servers over ssh.
  - Compile code with gcc and clang.
  - Use the python console as a pocket calculator.
  - Check out projects with git and subversion.
  - Run text-based games with frotz.
  - and more
- At first start a small base system is downloaded - desired packages can then be
installed using the apt package manager known from the Debian and Ubuntu Linux
distributions. Access the built-in help by long-pressing anywhere on the
terminal and selecting the Help menu option to learn more.
- More information can be found on:
  - Wiki: [https://wiki.termux.com/](https://wiki.termux.com/).
  - Reddit Community: [https://termux.com/community](https://termux.com/community).
### App User Interface
- Pinch to zoom in or out.
- Long press to Copy, Paste, Select URL, Share transcript, Autofill password, Reset, Kill process, Style, Keep screen on, Help, Settings, or Report Issue.
- Pull out the left menu to open **Termux Settings**, start another **NEW SESSION**, or launch **KEYBOARD**.
- Read the tutorial about it in [Termux Graphical Environment with VNC Server, and Fluxbox or Openbox Windows Manager, or XFCE, LXQt, or MATE Desktop Environment](#termux-graphical-environment-with-vnc-server-and-fluxbox-or-openbox-windows-manager-or-xfce-lxqt-or-mate-desktop-environment).
### Package Management
#### pkg
pkg is a tool for managing apt packages.\
Usage: `pkg [--check-mirror] command [arguments]`.
- `--check-mirror` - forces a re-check of availability of mirrors
- Commands:
  - `autoclean` - Remove all outdated packages from apt cache.
  - `clean` - Remove all packages from apt cache.
  - `files <packages>` - Show all files installed by packages.
  - `install <packages>` - Install specified packages.
  - `list-all` - List all packages available in repositories.
  - `list-installed` - List installed packages.
  - `reinstall <packages>` - Reinstall specified installed packages at the latest version.
  - `search <query>` - Search package by query, for example by name or description part.
  - `show <packages>` - Show basic metadata, such as dependencies.
  - `uninstall <packages>` - Uninstall specified packages. Configuration files will be left intact.
  - `upgrade` - Upgrade all installed packages to the latest version.
  - `update` - Update apt databases from configured repositories.
#### apt
apt is a commandline package manager and provides commands for searching and managing as well as querying information about packages. It provides the same functionality as the specialized APT tools, like apt-get and apt-cache, but enables options more suitable for interactive use by default.\
- Usage: `apt [options] command`
- Synopsys: `apt [-h] [-o=config_string] [-c=config_file] [-t=target_release] [-a=architecture] {list | search | show | update | install pkg [{=pkg_version_number | /target_release}]... | remove pkg... | upgrade | full-upgrade | edit-sources | {-v | --version} | {-h | --help}}`
- Most used commands:
  - `list` - list packages based on package names
  - `search` - search in package descriptions
  - `show` - show package details
  - `install` - install packages
  - `reinstall` - reinstall packages
  - `remove` - remove packages
  - `autoremove` - automatically remove all unused packages
  - `update` - update list of available packages
  - `upgrade` - upgrade the system by installing/upgrading packages
  - `full-upgrade` - upgrade the system by removing/installing/upgrading packages
  - `edit-sources` - edit the source information file
  - `satisfy` - satisfy dependency strings
- See apt(8) for more information about the available commands: [https://manpages.debian.org/unstable/apt/apt.8.en.html](https://manpages.debian.org/unstable/apt/apt.8.en.html).
- Configuration options and syntax is detailed in apt.conf(5): [https://manpages.debian.org/unstable/apt/apt.conf.5.en.html](https://manpages.debian.org/unstable/apt/apt.conf.5.en.html).
- Information about how to configure sources can be found in sources.list(5): [https://manpages.debian.org/unstable/apt/sources.list.5.en.html](https://manpages.debian.org/unstable/apt/sources.list.5.en.html).
- Package and version choices can be expressed via apt_preferences(5): [https://manpages.debian.org/unstable/apt/apt_preferences.5.en.html](https://manpages.debian.org/unstable/apt/apt_preferences.5.en.html).
- Security details are available in apt-secure(8): [https://manpages.debian.org/unstable/apt/apt-secure.8.en.html](https://manpages.debian.org/unstable/apt/apt-secure.8.en.html).
#### Command for Copy
```
apt update && apt upgrade && apt --fix-broken install && apt autoremove --purge && apt clean && pkg update && pkg upgrade && pkg clean
```
```
apt update && apt upgrade && pkg update && pkg upgrade
```
```
apt update && apt upgrade
```
```
pkg update && pkg upgrade
```
### SIGINT (Signal Interrupt)
Press Ctrl + C to send a signal called SIGINT (Signal Interrupt) to the currently running process. This signal instructs the process to stop execution. It is typically used to terminate a running program or command, especially one that is taking too long or has become unresponsive.
### Package Command Error
Termux had to move the primary Termux package repository hosting from Bintray to Fosshost since Bintray shut down on May 1st, 2021 which created problems for users while running package installation and update commands with pkg or apt and their commands would fail with errors similar to the following:
```
E: The repository 'https://termux.org/packages stable Release' does no longer have a Release file.
N: Metadata integrity can't be verified, repository is disabled now.
N: Possible cause: repository is under maintenance or down (wrong sources.list URL?).
```
```
E: The repository 'https://dl.bintray.com/grimler/game-packages-24 games Release' does not have a Release file.
N: Metadata integrity can't be verified, repository is disabled now.
N: Possible cause: repository is under maintenance or down (wrong sources.list URL?).
```
```
E: The repository 'https://science.termux-mirror.ml science Release' does not have a Release file.
N: Metadata integrity can't be verified, repository is disabled now.
N: Possible cause: repository is under maintenance or down (wrong sources.list URL?).
```
#### Command Solution
- Run `termux-change-repo` command.
- Select one or more repositories for which you want to change mirror by tapping "space" and navigating over list by up/down arrow keys. Tap enter to confirm the choice.
- Pick a mirror, it is recommended to begin with mirror hosted by Grimler. Same as previously, navigate over list by arrow keys, pick mirror by space key and confirm choice by pressing "enter".
- If you have installed other package repositories, like x11 and root, then you must select and change those mirrors as well. You can check your current mirrors by running the `termux-info` command. Note that the science and game repos have been merged into main repo and should be removed with apt remove science-repo game-repo if you have them installed.
- If you receive errors like:
  ```
  E: Repository 'https://grimler.se/termux-root-packages-24 root InRelease' changed its 'Origin' value from 'Bintray' to 'termux-root-packages-24 root'
  E: Repository 'https://grimler.se/termux-root-packages-24 root InRelease' changed its 'Label' value from 'Bintray' to 'termux-root-packages-24 root'
  N: This must be accepted explicitly before updates for this repository can be applied. See apt-secure(8) manpage for details.
  Do you want to accept these changes and continue updating from this repository? [y/N] 
  ```
  , then accept them by typing `y`.
- After changing the mirror, it is highly advisable to run `pkg upgrade` command to update all packages to the latest available versions, or at least update `termux-tools` package with `pkg install termux-tools` command. Also make sure your device has internet connectivity and the repository URLs are accessible in a browser.
#### Manual Solution
- If for some reason `termux-change-repo` is not available, you can manually edit `sources.list` to replace the main url with a value obtained from [Termux Mirrors List](https://github.com/termux/termux-packages/wiki/Mirrors). 
- Run `nano $PREFIX/etc/apt/sources.list` to edit it. 
- This will not change the urls of other package repositories, to change those run `pkg install termux-tools` afterwards and use `termux-change-repo` or manually edit their files under `$PREFIX/etc/apt/sources.list.d` directory.
- Changing the mirror may specially be needed if a user is still using bintray as the mirror or `pkg upgrade` command hasn't been run in a while to update termux package related scripts.
#### Further Readings and References
- [https://github.com/termux/termux-packages/wiki/Package-Management](https://github.com/termux/termux-packages/wiki/Package-Management).
- [https://github.com/termux/termux-packages/issues/6726](https://github.com/termux/termux-packages/issues/6726).
- [https://github.com/termux/termux-packages/issues/6455](https://github.com/termux/termux-packages/issues/6455).
- [https://github.com/termux/termux-packages/wiki/Mirrors](https://github.com/termux/termux-packages/wiki/Mirrors).
### Process completed (signal 9) - press Enter error
Some Android OS will kill any (phantom) processes greater than 32 (limit is for all apps combined) and also kill any processes using excessive CPU. You may get [Process completed (signal 9) - press Enter] message in the terminal without actually exiting the shell process yourself. Here is the guide of how to turn it off.
#### Fix for Stock Android 12L and beyond
- In phone's **Settings** or something similar, go to **About Phone > Software Information** or something similar, and tap the **Version Number** seven times to enable **Developer Options**. Some phones may have different methods to enable **Developer Options**.
- Find the section named **Feature Flags**, enter via clicking it.
- Find the switch to toggle off **settings_enable_monitor_phantom_procs** to disable phantom process killer.
- To enable phantom process killer again, just toggle on the switch.
#### Fix for QEMs like OneUI, MiUi, Samsung, etc. and other non-stock Android 12L and beyond
- Connect to Android Debug Bridge (ADB) of your Android device from Linux, Windows, MacOS, etc. or via **Shizuku**. Read the tutorial about **Shizuku** in [Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell](#shizuku-systemui-tuner-and-ashell-use-local-adb-of-android-device-on-terminals-such-as-termux-without-another-device-with-shizuku-leave-developer-options-off-when-doing-so-with-systemui-tuner-and-use-adb-with-features-like-autocomplete-suggestion-with-ashell) to learn about it.
- Type `adb shell` to enter `adb shell`.
- Run the following commands inside `adb shell`:
  ```
  /system/bin/device_config set_sync_disabled_for_tests persistent
  /system/bin/device_config put activity_manager max_phantom_processes 2147483647
  settings put global settings_enable_monitor_phantom_procs false
  ```
- To check the status of whether phantom process killer is disabled, run the following commands inside `adb shell`:
  ```
  /system/bin/dumpsys activity settings | grep max_phantom_processes
  /system/bin/device_config get activity_manager max_phantom_processes
  ```
- To enable phantom process killer again, run the following commands inside `adb shell`:
  ```
  /system/bin/device_config set_sync_disabled_for_tests none; /system/bin/device_config put activity_manager max_phantom_processes 32
  settings put global settings_enable_monitor_phantom_procs true
  ```
#### Further Readings and References 
- [https://github.com/termux/termux-app/issues/2366#issuecomment-1237468220](https://github.com/termux/termux-app/issues/2366#issuecomment-1237468220).
- [https://github.com/termux/termux-app/issues/2366](https://github.com/termux/termux-app/issues/2366).
- [https://docs.andronix.app/android-12/andronix-on-android-12-and-beyond](https://docs.andronix.app/android-12/andronix-on-android-12-and-beyond).
- [https://www.xda-developers.com/android-13-phantom-process-toggle/](https://www.xda-developers.com/android-13-phantom-process-toggle/).
- [https://youtu.be/mjXSh3yq-I0](https://youtu.be/mjXSh3yq-I0).
- [https://ivonblog.com/en-us/posts/fix-termux-signal9-error/](https://ivonblog.com/en-us/posts/fix-termux-signal9-error/).
- [https://kskroyal.com/disable-phantom-process-killer-in-android-12-13/#google_vignette](https://kskroyal.com/disable-phantom-process-killer-in-android-12-13/#google_vignette).
- [https://issuetracker.google.com/u/1/issues/205156966](https://issuetracker.google.com/u/1/issues/205156966).
- [https://github.com/agnostic-apollo/Android-Docs/blob/master/en%2Fdocs%2Fapps%2Fprocesses%2Fphantom-cached-and-empty-processes.md](https://github.com/agnostic-apollo/Android-Docs/blob/master/en%2Fdocs%2Fapps%2Fprocesses%2Fphantom-cached-and-empty-processes.md).
---
## Termux Graphical Environment with VNC Server, and Fluxbox or Openbox Windows Manager, or XFCE, LXQt, or MATE Desktop Environment
Read the tutorial about **Termux** in [Termux: a Powerful Terminal Emulation with an Extensive Linux Package Collection](#termux-a-powerful-terminal-emulation-with-an-extensive-linux-package-collection).
### Enable the X11 Repository 
X11 packages are available in a separate APT repository. You can enable it by running the following command:
```
pkg install x11-repo
```
It will automatically add appropriate sources.list file and PGP key.\
You can disable this repository by running the following command:
```
pkg uninstall x11-repo
```
### VNC Server
In this section, you will learn how to set up a VNC server in **Termux** for graphical output.
#### Install TigerVNC
```
pkg install tigervnc
```
#### Start Server
Not specifying port:
```
vncserver -localhost
```
VNC server will start on unused port with the smallest positive integer number, like `localhost:1` if port 1 is not used.\
Specifying port:
```
vncserver :1
```
VNC server will start on the port you specified.\
Specifying resolution:
```
vncserver :1 -geometry 1920x1080
```
You can specify resolution with `-geometry`.\
At first time, you will be prompted for setting up passwords:
```
You will require a password to access your desktops.

Password:
Verify:
Would you like to enter a view-only password (y/n)? n
```
Note that passwords are not visible when you are typing them and maximal password length is 8 characters.\
If everything is okay, you will see this message:
```
New 'localhost:1 ()' desktop is localhost:1

Creating default startup script /data/data/com.termux/files/home/.vnc/xstartup
Creating default config /data/data/com.termux/files/home/.vnc/config
Starting applications specified in /data/data/com.termux/files/home/.vnc/xstartup
Log file is /data/data/com.termux/files/home/.vnc/localhost:1.log
```
It means that the server is available on display `localhost:1`. \
To make programs do graphical output to the display `localhost:1`, set environment variable like shown here (yes, without specifying `localhost`):
```
export DISPLAY=":1"
```
You may even put this variable to your bashrc or profile so you don't have to always set it manually unless display address will be changed.\
Connect to the VNC server from a VNC viewer to view the output, you will not see anything except your mouse pointer if no windows manager or desktop environment is started.
#### Kill
```
vncserver -kill localhost:1
```
Change the port with the actual port your VNC server started on.
### Fluxbox
#### Install Fluxbox
```
pkg install fluxbox
```
#### Setup
```
nano ~/.vnc/xstartup
```
Copy below command and paste to it:
```
#!/data/data/com.termux/files/usr/bin/sh
## Fluxbox desktop.

# Generate menu.
fluxbox-generate_menu

# Start fluxbox.
fluxbox &
```
Fluxbox will start automatically on VNC server startup.
### Openbox
#### Install Openbox
```
pkg install openbox pypanel xorg-xsetroot
```
#### Setup
```
nano ~/.vnc/xstartup
```
Copy below command and paste to it:
```
#!/data/data/com.termux/files/usr/bin/sh

# Start Openbox.
openbox-session &
```
Don't put any else command to the file `~/.vnc/xstartup` but only the lines shown above since Openbox has its own autostart script, which is located at `${PREFIX}/etc/xdg/openbox/autostart`.
```
nano ~/etc/xdg/openbox/autostart
```
Copy below command and paste to it:
```
# Make background gray.
xsetroot -solid gray

# Launch PyPanel.
pypanel &
```
Openbox will start automatically on VNC server startup.
### XFCE
#### Install XFCE
```
pkg install xfce4
```
#### Setup
```
nano ~/.vnc/xstartup
```
Copy below command and paste to it:
```
#!/data/data/com.termux/files/usr/bin/sh
xfce4-session &
```
Don't put any other command to the file `~/.vnc/xstartup` but only the lines shown above.\
XFCE will start automatically on VNC server startup.
#### Additional Recommended Packages for Installation
- `netsurf` - Simple graphical web browser. Javascript is not supported.
- `xfce4-terminal` - Terminal emulator for XFCE. It is not included as part of XFCE installation to allow use of `aterm` or `st`.
### LXQt
#### Install LXQt
```
pkg install lxqt
```
#### Setup
```
nano ~/.vnc/xstartup
```
Copy below command and paste to it:
```
#!/data/data/com.termux/files/usr/bin/sh
startlxqt &
```
Don't put any other command to the file `~/.vnc/xstartup` but only the lines shown above.\
LXQt will start automatically on VNC server startup.
#### Additional Recommended Packages for Installation
- `otter-browser` - Free and open source web browser that aims to recreate aspects of Opera 12.x
- `qterminal` - Terminal emulator for LXQt. It is not included as part of LXQt installation to allow use of `aterm` or `st`.
### MATE
#### Install MATE
```
pkg install mate-* marco
```
#### Setup
```
nano ~/.vnc/xstartup
```
Copy below command and paste to it:
```
#!/data/data/com.termux/files/usr/bin/sh
mate-session &
```
Don't put any other command to the file `~/.vnc/xstartup` but only the lines shown above.\
MATE will start automatically on VNC server startup.
#### Additional Recommended Packages for Installation
- `netsurf` - Simple graphical web browser. Javascript is not supported.
- `mate-terminal` - Terminal emulator for MATE. It is not included as part of MATE installation to allow use of `aterm` or `st`.
### Further Readings and References
- [https://wiki.termux.com/wiki/Graphical_Environment](https://wiki.termux.com/wiki/Graphical_Environment).
- [https://github.com/termux/x11-packages](https://github.com/termux/x11-packages).
---
## Andronix with Termux: Install Linux Distributions in Termux on Non-Rooted Android Devices
### Optional but Recommended: Install Andronix App
Install Andronix from Google Play Store: [https://play.google.com/store/apps/details?id=studio.com.techriz.andronix](https://play.google.com/store/apps/details?id=studio.com.techriz.andronix).
### Introduction of Andronix and PRoot
- **Andronix** is an app that lets you install Linux distributions like Ubuntu, Debian, Manjaro etc. in **Termux** on non-rooted Android devices with **PRoot**. **Andronix** provide paid, close-source modded OS too, which won't be mentioned in this tutorial. Read the tutorial about **Termux** in [Termux: a Powerful Terminal Emulation with an Extensive Linux Package Collection](#termux-a-powerful-terminal-emulation-with-an-extensive-linux-package-collection).
- **PRoot** is a user-space implementation of chroot, mount --bind, and binfmt_misc. This means that users don't need any privileges or setup to do things like using an arbitrary directory as the new root file system, making files accessible somewhere else in the file system hierarchy, or executing programs built for another CPU architecture transparently through QEMU user-mode.
- chroot is an operation on Unix and Unix-like operating systems that changes the apparent root directory for the current running process and its children. A program that is run in such a modified environment cannot name (and therefore normally cannot access) files outside the designated directory tree.
- Further readings and references:
  - [https://en.m.wikipedia.org/wiki/Chroot](https://en.m.wikipedia.org/wiki/Chroot).
  - [https://github.com/AndronixApp/AndronixOrigin](https://github.com/AndronixApp/AndronixOrigin).
### Install an OS
- Open **Andronix** app.
- Click the **Linux Distribution** card.
- Click on the Linux distribution you want to install. It is recommended to get started with Ubuntu or Debian if you are overwhelmed by the options.
- Click on the user interface you want. Graphical User Interface or GUI is the visual interface that you interact with to do things in your Linux distribution. Command Line Interface or CLI is the text-based interface that you interact with to execute commands and perform tasks in your Linux distribution. 
  - Desktop Environment: You can choose a Desktop Environment if you would like to use your mouse as well as your keyboard, or you've little or no experience with Linux. 
  - Window Manager: You can choose a Window Manager if you only want to use your keyboard to manage Windows and other OS-level tasks. These are pretty light and fast, but do require some skill before getting productive. 
  - CLI Only: If you don't want a Graphical User-interface, you can go ahead with the Command Line Interface. You'll have a terminal, which is enough if you know what you're doing in your session.
- **Andronix** will automatically copy the command to your clipboard.
- Paste and run in **Termux**.
### Uninstall an OS (Not Modded)
- Open **Andronix** app.
- Click the **Linux Distribution** card.
- Long press on the Linux distribution you want to uninstall.
- Select**Uninstall**.
- **Andronix** will automatically copy the command to your clipboard.
- Paste and run in **Termux** (Not inside Linux).
### Sound Output from PRoot OS
#### Install and Setup Sound Output from PRoot OS
Run the following command in Termux (Not inside Linux):
```
pkg install wget && wget https://andronixos.sfo2.cdn.digitaloceanspaces.com/OS-Files/setup-audio.sh && chmod +x setup-audio.sh && ./setup-audio.sh
```
#### Start PulseAudio Server
```
pulseaudio --start
```
### Signal 9 Error
You may encounter `Process completed (signal 9) - press Enter error` error, read the tutorial about it in [Process completed (signal 9) - press Enter error](#process-completed-signal-9---press-enter-error).
### Example: Debian with XFCE Desktop Environment
#### Install Debian with XFCE
```
pkg update -y && pkg install wget curl proot tar -y && wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Installer/Debian/debian-xfce.sh -O debian-xfce.sh && chmod +x debian-xfce.sh &&  bash debian-xfce.sh
```
The file directory of the Debian OS will be `debian-fs`. You can read, write, and execute files in it both in **Termux** or in the Debian OS.
#### Turn on (CLI)
```
./start-debian.sh
```
#### VNC Server
- Run `vncserver-start` in the OS to start the VNC server (default on port 1).
- Get a VNC viewer.
- Add a new connection with address `localhost:1`.
- View GUI of the OS from VNC viewer.
- Run `vncserver-start` in the OS to kill all VNC servers.
### Example: Debian with CLI Only
#### Install Debian
```
pkg update -y && pkg install wget curl proot tar -y && wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Installer/Debian/debian.sh -O debian.sh && chmod +x debian.sh && bash debian.sh
```
The file directory of the Debian OS will be `debian-fs`. You can read, write, and execute files in it both in **Termux** or in the Debian OS.
### Example: Uninstallation of Debian OS (Not Modded)
```
wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Uninstall/Debian/UNI-debian.sh && chmod +x UNI-debian.sh && bash UNI-debian.sh
```
### Note
Remember to update before `apt` installing.
```
apt update && apt upgrade
```
---
## QEMU System Emulation with Termux: Full System Emulation of Multiple CPU Architectures and Operating Systems with ISO Image Method or QCOW2 Cloud Image
Read the tutorial about **Termux** in [Termux: a Powerful Terminal Emulation with an Extensive Linux Package Collection](#termux-a-powerful-terminal-emulation-with-an-extensive-linux-package-collection).
### Install QEMU
Run the following command in **Termux**:
```
pkg install qemu-system-x86_64 qemu-utils qemu-common openssl
```
### ISO Image method
This method is more customizable but may encounter some issues like GRUB menu not showing on CLI or stuck at 79% or 83% of the installation of the base system. Use qcow2 cloud image method if you don't prepare to solve these problems. This tutorial assumes no such problems are encounter.\
It is recommended to get started with Ubuntu or Debian if you are overwhelmed by the options.
#### Prepare the ISO Image
Prepare the ISO image. Here takes Debian AMD64 for example. Change the URL to the download link of the ISO image you want or `cp` or `mv` the ISO image you want to the directory you want.
```
wget https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.7.0-amd64-netinst.iso
```
#### Create a Virtual Disk Image Where the Operating System Will Be Installed
```
qemu-img create -f qcow2 debian_amd64.qcow2 20G
```
Change the `debian_amd64.qcow2` to the file name you want. `20G` indicates 20GB disk image. You can adjust the size as needed.
#### Install VM with CLI
```
nano install-qemu.sh
```
Copy below command and paste to it:
```
qemu-system-x86_64 -machine q35 \
-drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd \
-m 2G \
-accel tcg,thread=multi \
-smp sockets=1,cores=4,threads=1 \
-cpu qemu64 \
-vga std \
-netdev user,id=n1,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 \
-device intel-hda \
-device qemu-xhci \
-boot d \
-boot menu=on \
-drive file=debian_amd64.qcow2 \
-nographic \
-serial mon:stdio \
-display none \
-cdrom ~/debian-12.7.0-amd64-DVD-1.iso
```
Adjust `hostfwd` as needed. In the above command, `tcp` specifies the TCP protocol for the forwarding rule, `::2222` indicates that on the host machine, TCP connections to port 2222 will be forwarded, and `-:22` indicates that these connections will be forwarded to port 22 (the default SSH port) on the guest virtual machine. Change the `debian_amd64.qcow2` to the real file name. Change the `debian-12.7.0-amd64-netinst.iso` to the real ISO path. `20G` indicates 20GB disk image. You can adjust the size as needed.\
Make it executable:
```
chmod +x install-qemu.sh
```
Run it:
```
./install-qemu.sh
```
Follow the screen guide to install.
#### Install VM with GUI
```
nano install-qemu.sh
```
Copy below command and paste to it:
```
qemu-system-x86_64 -machine q35 \
-drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd \
-m 2G \
-accel tcg,thread=multi \
-smp sockets=1,cores=4,threads=1 \
-cpu qemu64 \
-vga std \
-netdev user,id=n1,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 \
-device intel-hda \
-device usb-tablet \
-boot menu=on \
-drive file=debian_amd64.qcow2 \
--vnc :0 \
-cdrom ~/debian-12.7.0-amd64-netinst.iso
```
Adjust `hostfwd` as needed. Change the `debian_amd64.qcow2` to the real file name. Change the `debian-12.7.0-amd64-netinst.iso` to the real ISO path. `20G` indicates 20GB disk image. You can adjust the size as needed. Change the numerical value after `--vnc :` to the port you want to use.\
Make it executable:
```
chmod +x install-qemu.sh
```
Run it:
```
./install-qemu.sh
```
Connect to the VNC server from a VNC viewer and follow the screen guide on the VNC viewer to install.
#### Boot VM with CLI
```
nano qemu-cli.sh
```
Copy below command and paste to it:
```
qemu-system-x86_64 -machine q35 \
-drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd \
-m 2G \
-accel tcg,thread=multi \
-smp sockets=1,cores=4,threads=1 \
-cpu qemu64 \
-vga std \
-netdev user,id=n1,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 \
-device intel-hda \
-device usb-tablet \
-boot menu=on \
-drive file=debian_amd64.qcow2 \
-serial mon:stdio \
-display none
```
Adjust `hostfwd` as needed. Change the `debian_amd64.qcow2` to the real file name. `20G` indicates 20GB disk image. You can adjust the size as needed.\
Make it executable:
```
chmod +x qemu-cli.sh
```
Run it to boot the VM with CLI:
```
./qemu-cli.sh
```
#### Boot with GUI
```
nano qemu-gui.sh
```
Copy below command and paste to it:
```
qemu-system-x86_64 -machine q35 \
-drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd \
-m 2G \
-accel tcg,thread=multi \
-smp sockets=1,cores=4,threads=1 \
-cpu qemu64 \
-vga std \
-netdev user,id=n1,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 \
-device intel-hda \
-device usb-tablet \
-boot menu=on \
-drive file=debian_amd64.qcow2 \
--vnc :0
```
Adjust `hostfwd` as needed. Change the `debian_amd64.qcow2` to the real file name. `20G` indicates 20GB disk image. You can adjust the size as needed. Change the numerical value after `--vnc :` to the port you want to use.\
Make it executable:
```
chmod +x qemu-cli.sh
```
Run it to boot the VM with GUI:
```
./qemu-gui.sh
```
Connect to the VNC server from a VNC viewer.
### QCOW2 Image Method
This method is more easy but less customizable.\
It is recommended to get started with Ubuntu or Debian if you are overwhelmed by the options.
#### Prepare the QCOW2 Image
Prepare the qcow2 image. Here takes Debian AMD64 qcow2 cloud image for example. Change the URL to the download link of the qcow2 image you want or `cp` or `mv` the qcow2 image you want to the directory you want.
```
wget https://cloud.debian.org/images/cloud/bookworm/latest/debian-12-nocloud-amd64.qcow2
```
#### Boot with CLI
```
nano qemu-cli.sh
```
Copy below command and paste to it:
```
qemu-system-x86_64 -m 2G \
-drive file=debian-12-nocloud-amd64.qcow2,format=qcow2 \
-nographic \
-serial mon:stdio \
-display none \
-netdev user,id=net0,hostfwd=tcp::2222-:22 \
-device e1000,netdev=net0
```
Change the `debian-12-nocloud-amd64.qcow2` to the real file name. `20G` indicates 20GB disk image. You can adjust the size as needed. Adjust `hostfwd` as needed.\
Make it executable:
```
chmod +x qemu-cli.sh
```
Run it to boot the VM with CLI:
```
./qemu-cli.sh
```
#### Boot with GUI
```
nano qemu-gui.sh
```
Copy below command and paste to it:
```
qemu-system-x86_64 -m 2G \
-drive file=debian-12-nocloud-amd64.qcow2,format=qcow2 \
-vnc :0
-netdev user,id=net0,hostfwd=tcp::2222-:22 \
-device e1000,netdev=net0
```
Change `debian-12-nocloud-amd64.qcow2` to the real file name. `20G` indicates 20GB disk image. You can adjust the size as needed. Change the numerical value after `--vnc :` to the port you want to use. Adjust `hostfwd` as needed.\
Make it executable:
```
chmod +x qemu-cli.sh
```
Run it to boot the VM with GUI:
```
./qemu-gui.sh
```
Connect to the VNC server from a VNC viewer.
### Window Managers or Desktop Environments
You can install a window manager such as Fluxbox or Openbox, or desktop environment such as XFCE, LXQt, or MATE for your GUI.
### Login
When you see something similar to the below in the VM:
```
Debian GNU/Linux 12 localhost ttyS0

localhost login:
```
In the first time, type `root` and you will be logged in without a password. \
You can set password latter by:
```
passwd
```
The password should be at least 4 letters long.\
If you don't want to set a password, just type `root` and you will be logged in without a password every time.
### Resize Disk Space
In **Termux** (outside VM), run:
```
qemu-img resize debian-12-nocloud-amd64.qcow2 +30G
```
Change `debian-12-nocloud-amd64.qcow2` to the real file name. `+20G` indicates increasing 20GB disk image. You can adjust the size as needed. \
Inside VM, run:
```
sudo apt install parted e2fsprogs
sudo parted /dev/sda
print
fix
resizepart 1 100%
quit
sudo resize2fs /dev/sda1
```
### Check
#### Check Info
In **Termux** (outside VM), run:
```
qemu-img info debian-12-nocloud-amd64.qcow2
```
Change `debian-12-nocloud-amd64.qcow2` to the real file name. 
#### Check Disk
Inside VM, run:
```
df -h
```
and for partition, run:
```
lsblk
```
### Signal 9 Error
You may encounter `Process completed (signal 9) - press Enter error` error, read the tutorial about it in [Process completed (signal 9) - press Enter error](#process-completed-signal-9---press-enter-error).
### Note
- Remember to update before `apt` installing.
  ```
  apt update && apt upgrade
  ```
- You can start a SSH server in QEMU VM and start a client in another **Termux** session with `openssh`.
### Further Readings and References 
- [https://ivonblog.com/posts/termux-qemu-system-linux/](https://ivonblog.com/posts/termux-qemu-system-linux/)
- [https://www.qemu.org/docs/master/index.html](https://www.qemu.org/docs/master/index.html)
- [https://www.debian.org/distrib/index.en.html](https://www.debian.org/distrib/index.en.html)
- [https://chatgpt.com/](https://chatgpt.com/)
- [https://www.reddit.com/r/debian/s/s871vXlGRI](https://www.reddit.com/r/debian/s/s871vXlGRI)
---
## Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell
### Install Shizuku
- Install **Shizuku** from Google Play Store: [https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api).
- Official tutorial of Shizuku: [https://shizuku.rikka.app/guide/setup/?night=1](https://shizuku.rikka.app/guide/setup/?night=1)
### Introduction of Shizuku and ADB
- **Shizuku** is An open-source app for serving multiple apps that require root/adb.
- The Android Debug Bridge (commonly abbreviated as adb) is a programming tool used for the debugging of Android-based devices. The daemon on the Android device connects with the server on the host PC over USB or TCP, which connects to the client that is used by the end-user over TCP. Made available as open-source software under the Apache License by Google since 2007, its features include a shell and the possibility to make backups. The adb software is available for Windows, Linux and macOS. It has been misused by botnets and other malware, for which mitigations were developed such as RSA authentication and device whitelisting.
- Further readings and references: 
  - [https://developer.android.com/tools/adb](https://developer.android.com/tools/adb).
  - [https://android.googlesource.com/platform/packages/modules/adb/](https://android.googlesource.com/platform/packages/modules/adb/).
### Connect Shizuku to Wireless ADB
1. Grant **Shizuku** notification permission.
2. Tap **Pairing** in **Start via Wireless debugging** block in **Shizuku**.
2. Connect to a WiFi you trust. You don't need to log in to the WiFi if the WiFi needs that. You just need to let your phone think that you're connected to WiFi.
2. In phone's **Settings** or something similar, go to **About Phone > Software Information** or something similar, and tap the **Version Number** seven times to enable **Developer Options**. Some phones may have different methods to enable **Developer Options**.
2. In the **Developer Options**, enable **Wireless ADB** and tap **Pair with a pairing code**.
2. Input the pairing code in the notification of **Shizuku**.
2. In the **Developer Options**, deactivate **ADB authorization timeout** if you don't want to do all the above again every time you use **Shizuku**. However, the connection may still be killed by the system after maybe a few days even if you've done this, follow [Reconnect Shizuku in Case it Stops with SystemUI Tuner](#reconnect-shizuku-in-case-it-stops-with-systemui-tuner) to reconnect if you're using **SystemUI Tuner** or something similar at the same time, follow the above otherwise.
2. Back to **Shizuku** and tap **Start** in **Start via Wireless debugging** block. You all see **Shizuku is running** on the top of the interface of **Shizuku**.
### Use Shizuku in a Terminal Application for the First Time (Termux for Example)
1. Tap **Use Shizuku in terminal applications** in **Shizuku** and export files `rish` and `rish_shizuku.dex` to somewhere on your phone.
2. Use a text editor to replace `PKG` in `rish` with the package name of your terminal application. Take **Termux** for example, **Termux**'s package name is `com.termux`. Run `termux-setup-storage` to grant **Termux** storage permission if you want to use it to run ADB commands (and many other commands). Read the tutorial about **Termux** in [Termux: a Powerful Terminal Emulation with an Extensive Linux Package Collection](#termux-a-powerful-terminal-emulation-with-an-extensive-linux-package-collection).
2. Open your terminal application and move the exported files to somewhere it can access with `mv old_location new_location`. The root directory of the main storage of Android is usually `/storage/emulated/0`. The home directory of **Termux** is `/data/data/com.termux/home`, which is abbreviated as `~` in **Termux**.
2. Go to the directory you moved the exported files to with `cd directory` (assumed `~/shizuku` below) and run `sh rish`.
2. Where used to be `~ $` should become `e2q:/ $` or something similar if `sh rish` succeeded. Write ADB commands here. Note that there is no need to use `adb` or `adb shell` prefixes before commands and that `devices` command gets `/system/bin/sh: devices: inaccessible or not found`.
2. You can turn WiFi off after ADB is connected. The notification of **Shizuku** may say **Paring failed** after that, but you can check **Shizuku** app to check whether there's a block read **Shizuku is running** on the top.
2. Optionally, create a `.sh` file (`nano ~/shizuku.sh` for example), paste the following code block, save it, and make it executable with `chmod +x shizuku.sh` so that you can run this shortcut to start **Shizuku** on your terminal afterward.
    ```
    #!/data/data/com.termux/files/usr/bin/bash
    cd shizuku
    sh rish
    ```
2. **Note**: It is recommended to use **Termux**'s F-Droid version and avoid using Google Play Store version because the latter is depreciated. F-Droid: [https://f-droid.org/packages/com.termux/](https://f-droid.org/packages/com.termux/).
### Install SystemUI Tuner
Install **SystemUI Tuner** (pub: **Zachary Wander**) from Google Play Store: [https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner](https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner).
### To Leave Developer Options off When Using Shizuku to Connect to ADB
Some financial apps may require Developer Options to be off when using them. This section is the tutorial about how to turn Developer Options off while still using Shizuku ADB Shell.
1. Follow the screen instructions of **SystemUI Tuner**. 
2. Run `adb shell` command `pm grant com.zacharee1.systemuituner android.permission.WRITE_SECURE_SETTINGS` (you can do it with **Shizuku** and a terminal such as **Termux** or **aShell**).
2. Connect to a WiFi. You don't need to log in or have real WiFi access, just make your phone believes you are connected to WiFi.
2. Turn off **Developer Options** if it's on. The toggle switch is usually on the top of **Developer Options**.
2. In **SystemUI Tuner**, go to **Developer** and turn on **Enable ADB** and **Enable Wireless ADB**.
2. Go to **Persistent Options** and select **Enable ADB**.
2. Press **Start** on **Shizuku**.
2. Turn off WiFi. **Enable Wireless ADB** will be turned off automatically by system settings. You can check that in **SystemUI Tuner**.
### Reconnect Shizuku in Case it Stops with SystemUI Tuner
1. Connect to a WiFi. You don't need to log in or have real WiFi access, just make your phone believes you are connected to WiFi.
2. Turn off **Developer Options** if it's on. The toggle switch is usually on the top of **Developer Options**.
2. In **SystemUI Tuner**, go to **Developer** and turn on **Enable Wireless ADB**.
2. Press **Start** on **Shizuku**.
2. Turn off WiFi. **Enable Wireless ADB** will be turned off automatically by system settings. You can check that in **SystemUI Tuner**.
### Other SystemUI Tuner Usage
**SystemUI Tuner** exposes some hidden options in Android. You can set them, add them to **Persistent Options** to keep them on, etc. Different manufacturers may remove or change these options, which SystemUI Tuner CANNOT work around.\
You may need to run the following `adb shell` command (you can do it with **Shizuku** and a terminal such as **Termux** or **aShell**) in order to change the settings:
```
pm grant com.zacharee1.systemuituner android.permission.WRITE_SECURE_SETTINGS
pm grant com.zacharee1.systemuituner android.permission.PACKAGE_USAGE_STATS
pm grant com.zacharee1.systemuituner android.permission.DUMP
```
### Using aShell
- **aShell** has features like autocomplete suggestions and optional log.
- Download and Install **aShell** from F-droid. F-droid: [https://f-droid.org/packages/in.sunilpaulmathew.ashell/](https://f-droid.org/packages/in.sunilpaulmathew.ashell/).
- Give **aShell** the permission `moe.shizuku.manager.permission.API_V23`.
- Connect **Shizuku** to local ADB according to above guide.
- Use **aShell**.
---
## TrackerControl and InviZible Pro: Route Traffic through Tor, Block DNS over UDP, Set DNS Server, and Block Trackers
Read the tutorial about **Tor** in [Introduction of Tor](#introduction-of-tor).
### Install InviZible Pro
- Download and install **InviZible Pro** from F-Droid or Google Play Store. F-Droid: [https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/](https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/). Google Play Store: [https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp](https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp).
### Install TrackerControl
- Download and install **TrackerControl** (also known as **TC**) from F-Droid. F-Droid: [https://f-droid.org/packages/net.kollnig.missioncontrol.fdroid/](https://f-droid.org/packages/net.kollnig.missioncontrol.fdroid/).
- **Note**: Avoid use the Google Play version because it doesn't have the feature like trackers blocking in order to comply with Google's terms.
### Use TrackerControl to Block Trackers
- Block unwanted trackers in the main interface of the apps. 
- **Note**: **TrackerControl** categorizes trackers by port, corporation, category, etc. You can easily block and allow connections. You may have to try several time to figure out what trackers to allow in order to prevent apps from crashing in few cases.
- Turn on **TrackerControl** as the VPN service of the entire device.
- Blocking trackers can be used independently or with **Prxoy mode** of **InviZible Pro**.
### Configure TrackerControl (TC) to be used with InviZible Pro
- Turn on **TrackerControl** as the VPN service of the entire device.
- Disable monitoring of **InviZible Pro** (`pan.alexander.tordnscrypt.stable`) within **TrackerControl**.
- Go to the Advanced options in **Settings**.
    - Turn on **Block Trackers on UDP**.
    - Set the **SOCKS5 address** to `127.0.0.1`.
    - Set the **SOCKS port** to the port you've configured Tor to use in **InviZible Pro** (`9050` by default).
    - Enable the **Use SOCKS5 proxy** option.
    - Go to **Port forwarding**.
       - Add `UDP 53>/127.0.0.1:`the port you configure DNSCrypt to listen to in **DNSCrypt Settings** in **InviZible Pro**  (`5354` by default) `nobody`.
       - Add `TCP 53>/127.0.0.1:`the port you configure DNSCrypt to listen to in **DNSCrypt Settings** in **InviZible Pro**  (`5354` by default) `nobody`.
    - Set first (above) **VPN DNS** as `9.9.9.9`.
    - Set second (below) **VPN DNS** as `149.112.112.112`.
    - Set where to validate the internet connection in **Validate at** if you want, `www.f-droid.org` for example.
- Set other things if you want.
- Block unwanted trackers. 
- **Note**: If you export settings and import it on another device, the blocklist won't be able to be configured as that in the previous device.
- You can apply some of the above settings with the `.xml` below (assuming the configuration of **Invizible Pro** is as in this guide) by coping it, storing it in a `.xml` file and going to **Settings > Backup > Import settings** to import this file. However, it just contains some of the settings, you have to configure others yourself and test whether your applications work as normal because things may vary from case to case. 
    ```
    <?xml version='1.0' encoding='UTF-8' standalone='yes' ?>
    <trackercontrol>
      <application>
        <setting key="dns2" type="string" value="149.112.112.112" />
        <setting key="filter_udp" type="boolean" value="true" />
        <setting key="domain_based_blocking" type="boolean" value="true" />
        <setting key="dark_theme" type="boolean" value="true" />
        <setting key="dns" type="string" value="9.9.9.9" />
        <setting key="hosts_url_new" type="string" value="https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts" />
        <setting key="wifi_homes" type="set" value="" />
        <setting key="traffic_blocked" type="boolean" value="true" />
        <setting key="hosts_url" type="string" value="https://www.netguard.me/hosts" />
        <setting key="socks5_addr" type="string" value="127.0.0.1" />
        <setting key="socks5_port" type="string" value="9050" />
        <setting key="proto_tcp" type="boolean" value="true" />
        <setting key="manage_system" type="boolean" value="true" />
        <setting key="validate" type="string" value="www.f-droid.org" />
        <setting key="update_check" type="boolean" value="true" />
        <setting key="socks5_enabled" type="boolean" value="true" />
        <setting key="filter" type="boolean" value="true" />
      </application>
      <apply>
        <setting key="com.termux" type="boolean" value="false" />
        <setting key="pan.alexander.tordnscrypt.stable" type="boolean" value="false" />
      </apply>
      <forward>
        <port pkg="nobody" protocol="17" dport="53" raddr="127.0.0.1" rport="5354" />
        <port pkg="nobody" protocol="6" dport="53" raddr="127.0.0.1" rport="5354" />
      </forward>
    </trackercontrol>
    ```
- **Note**: **TrackerControl** has a **Traffic log** feature for free, which can help a lot in identifying which trackers should be unblocked when the services crash.
- **Note**: The above guide, including the setting `.xml`, can be used in **NetGuard** as well because **TrackerControl** uses **NetGuard**'s code. However, **Traffic log** feature is not available in **NetGuard**'s free version but only available in **TrackerControl** and **NetGuard**'s **Pro** version. **NetGuard** is available on Google Play Store and F-Droid. Google Play Store: [https://play.google.com/store/apps/details?id=eu.faircode.netguard](https://play.google.com/store/apps/details?id=eu.faircode.netguard). F-Droid: [https://f-droid.org/packages/eu.faircode.netguard/](https://f-droid.org/packages/eu.faircode.netguard/). 
- **Note**: You may have to disable monitoring of apps route traffic through Tor itself within **TrackerControl**, like **Tor Browser**,  and **Termux** if you're using `tor`, `torsocks`, or similar things.
### Configure InviZible Pro to be used with TrackerControl
- Change to **Proxy mode** by tapping the 3-point button in the upper right corner.
- Go to **Fast settings**.
    - Turn on **Autostart DNSCrypt** and **Autostart Tor** if you want.
    - Set Delay, DNSCrypr servers, bridges, whether to spoof SNI, etc. if needed.
- Go to **Common Settings** and turn on **Prevent device sleep** if needed.
- Go to **DNSCrypt Settings**
    - Go to **Listen port** and set it to the port **TrackerControl** forwarding UDP and TCP of port `53` to (`5354` by default).
    - Set requirements if you want.
    - Turn on **Force TCP**.
    - Turn on **Outbound proxy** in **SOCKS proxy** section.
    - Set **Proxy port** as the port you want to configure Tor to use in **InviZible Pro** (`9050` by default).
    - Ensure the **Forwarding rules** is coordinate with the **DNS port** in **Tor settings** (`onion 127.0.0.1:5400` by default).
    - Turn on **Query logging** and **Suspicious logging** if you want.
- Go to **Tor settings**.
    - Set Nodes, Proxy, etc. if you want. Make sure the **SOCKS port is coordinated with the **SOCKS proxy** in **TrackerControl** and the **DNS port** is coordinated with the **Forwarding rules** in **DNSCrypt Settings** (`onion 127.0.0.1:5400` by default).
- Set other things if you want.
- You can apply some of the above settings with the files below (assuming the configuration of **TrackerControl** is as in this guide). However, they just contain some of the settings, you have to configure others yourself and test whether your applications work as normal because things may vary from case to case. 
    - `dns-proxy.toml`: Copy the text in the below block, tap `Edit dns-proxy.toml` in **DNSCrypt Settings**, and paste.
    ```
    ipv4_servers = true
    ipv6_servers = true
    require_dnssec = true
    require_nolog = false
    require_nofilter = false
    block_ipv6 = false
    force_tcp = true
    server_names = ['adguard-dns', 'adguard-dns-ipv6', 'ahadns-doh-la', 'brahma-world-ipv6', 'dnsforge.de', 'mullvad-base-doh', 'sfw.scaleway-fr']
    disabled_server_names = []
    listen_addresses = ['127.0.0.1:5354', '[::1]:5354']
    max_clients = 250
    #user_name = '0'
    dnscrypt_servers = true
    doh_servers = true
    odoh_servers = true
    timeout = 5000
    keepalive = 30
    netprobe_timeout = -1
    log_level = 2
    log_file = '/data/user/0/pan.alexander.tordnscrypt.stable/logs/DnsCrypt.log'
    use_syslog = false
    cert_refresh_delay = 240
    dnscrypt_ephemeral_keys = false
    tls_disable_session_tickets = false
    bootstrap_resolvers = ['9.9.9.9:53', '[2620:fe::fe]:53']
    netprobe_address = '9.9.9.9:53'
    block_unqualified = true
    block_undelegated = true
    reject_ttl = 10
    ignore_system_dns = false
    http3 = true
    log_files_max_size = 1
    log_files_max_age = 7
    log_files_max_backups = 1
    cache = true
    cache_size = 4096
    cache_min_ttl = 2400
    cache_max_ttl = 86400
    cache_neg_ttl = 60
    cache_neg_max_ttl = 600
    forwarding_rules = 'forwarding-rules.txt'
    cloaking_rules = 'cloaking-rules.txt'
    proxy = 'socks5://127.0.0.1:9050'
    [captive_portals]
    map_file = 'captive-portals.txt'
    [dns64]
    #prefix = ['64:ff9b::/96']
    [local_doh]
    #listen_addresses = ['127.0.0.1:3000']
    #path = '/dns-query'
    #cert_file = 'localhost.pem'
    #cert_key_file = 'localhost.pem'
    [query_log]
    format = 'tsv'
    file = '/data/user/0/pan.alexander.tordnscrypt.stable/cache/query.log'
    ignored_qtypes = ['DNSKEY', 'NS']
    [nx_log]
    format = 'tsv'
    file = '/data/user/0/pan.alexander.tordnscrypt.stable/cache/nx.log'
    [blocked_names]
    blocked_names_file = 'blacklist.txt'
    [blocked_ips]
    blocked_ips_file = 'ip-blacklist.txt'
    [allowed_names]
    allowed_names_file = 'whitelist.txt'
    [sources]
    [sources.'public-resolvers']
    urls = ['https://raw.githubusercontent.com/DNSCrypt/dnscrypt-resolvers/master/v3/public-resolvers.md', 'https://download.dnscrypt.info/resolvers-list/v3/public-resolvers.md', 'https://ipv6.download.dnscrypt.info/resolvers-list/v3/public-resolvers.md']
    minisign_key = 'RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3'
    cache_file = 'public-resolvers.md'
    refresh_delay = 72
    prefix = ''
    [sources.'relays']
    urls = ['https://raw.githubusercontent.com/DNSCrypt/dnscrypt-resolvers/master/v3/relays.md', 'https://download.dnscrypt.info/resolvers-list/v3/relays.md', 'https://ipv6.download.dnscrypt.info/resolvers-list/v3/relays.md']
    cache_file = 'relays.md'
    minisign_key = 'RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3'
    refresh_delay = 72
    prefix = ''
    [sources.'odoh-servers']
    urls = ['https://raw.githubusercontent.com/DNSCrypt/dnscrypt-resolvers/master/v3/odoh-servers.md', 'https://download.dnscrypt.info/resolvers-list/v3/odoh-servers.md', 'https://ipv6.download.dnscrypt.info/resolvers-list/v3/odoh-servers.md']
    cache_file = 'odoh-servers.md'
    minisign_key = 'RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3'
    refresh_delay = 72
    prefix = ''
    [sources.'odoh-relays']
    urls = ['https://raw.githubusercontent.com/DNSCrypt/dnscrypt-resolvers/master/v3/odoh-relays.md', 'https://download.dnscrypt.info/resolvers-list/v3/odoh-relays.md', 'https://ipv6.download.dnscrypt.info/resolvers-list/v3/odoh-relays.md']
    cache_file = 'odoh-relays.md'
    minisign_key = 'RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3'
    refresh_delay = 72
    prefix = ''
    [broken_implementations]
    fragments_blocked = ['cisco', 'cisco-ipv6', 'cisco-familyshield', 'cisco-familyshield-ipv6', 'cleanbrowsing-adult', 'cleanbrowsing-adult-ipv6', 'cleanbrowsing-family', 'cleanbrowsing-family-ipv6', 'cleanbrowsing-security', 'cleanbrowsing-security-ipv6']
    [anonymized_dns]
    skip_incompatible = false
    routes = [
    { server_name = 'adguard-dns', via=['anon-kama', 'anon-scaleway', 'anon-tiarap'] },
    { server_name = 'sfw.scaleway-fr', via=['anon-kama', 'anon-serbica', 'anon-tiarap'] },
    { server_name = 'adguard-dns-ipv6', via=['anon-ams-ipv6', 'anon-scaleway-ams-ipv6', 'anon-tiarap-ipv6'] }
    ]
    [static]
    ```
    - `tor.conf`: Copy the text in the below block, tap `Edit tor.conf` in **Tor Settings**, and paste.
    ```
    RunAsDaemon 0
    AvoidDiskWrites 1
    AutomapHostsOnResolve 1
    AutomapHostsSuffixes .exit, .onion
    #ExcludeExitNodes
    TransPort 9040
    DNSPort 127.0.0.1:5400
    DNSPort [::1]:5400
    SOCKSPort 127.0.0.1:9050
    SOCKSPort [::1]:9050
    HardwareAccel 1
    Schedulers Vanilla
    #Socks5Proxy 127.0.0.1:1080
    ClientOnly 1
    ExitPolicy reject *:*
    ExitPolicy reject6 *:*
    GeoIPFile /data/user/0/pan.alexander.tordnscrypt.stable/app_data/tor/geoip
    GeoIPv6File /data/user/0/pan.alexander.tordnscrypt.stable/app_data/tor/geoip6
    DataDirectory /data/user/0/pan.alexander.tordnscrypt.stable/tor_data
    VirtualAddrNetworkIPv4 10.192.0.0/10
    VirtualAddrNetworkIPv6 [FC00::]/8
    Log notice file /data/user/0/pan.alexander.tordnscrypt.stable/logs/Tor.log
    ConnectionPadding 1
    ReducedConnectionPadding 1
    #ExcludeNodes
    ExitNodes {AU},{AT},{GB},{US},{DE},{SE},{CH},{LU},{NL},{NZ},{CA},{JP},{TW},{KR},{BE},{KY},{DK},{FI},{GL},{GR},{IS},{HU},{IE},{IT},{ES},{PT},{PL},{HR},{EE},{LV},{NO},{PH},{SG},{FR}
    #EntryNodes
    StrictNodes 0
    #ReachableAddresses *:80,*:443
    NewCircuitPeriod 30
    MaxCircuitDirtiness 600
    EnforceDistinctSubnets 1
    HTTPTunnelPort 8118
    DormantCanceledByStartup 1
    DormantClientTimeout 15 minutes
    CircuitsAvailableTimeout 86400
    ClientUseIPv4 1
    ClientUseIPv6 1
    UseBridges 0
    ```
- Turn both **Tor** and **DNSCrypt** of **InviZible Pro** on.
- **Note**: Some services may crash when routing traffic through `tor` (set in **Using SOCKS5 proxy** in **TrackerControl**), change the **Exit nodes** to the service's country or region of publication in **InviZible Pro** may help. Otherwise, you may try disabling monitoring that app or stopping **Using SOCKS5 proxy** in **TrackerControl**, which compromise your privacy to some degree.
### Use Tor but not DNSCrypr of InviZible Pro
If you want to use Tor but not DNSCrypr of **InviZible Pro** with **TrackerControl**, do below modification on configuration of both DNSCrypt and Tor above:
- Go to **Port forwarding** in **TrackerControl**
    - Delete all forwardings to port `5354`.
    - Add `UDP 53>/127.0.0.1:`the port you configure **Resolve DNS** to listen to in **Tor Settings** in **InviZible Pro**  (`5400` by default) `nobody`.
    - Add `TCP 53>/127.0.0.1:`the port you configure **Resolve DNS** to listen to in **Tor Settings** in **InviZible Pro**  (`5400` by default) `nobody`.
- Delete (set to empty) both **VPN DNS** in **TrackerControl**.
- Turn on Tor but not DNSCrypt in **InviZible Pro**.
### Use DNSCrypr But not Tor of InviZible Pro
If you want to use DNSCrypr But not Tor of **InviZible Pro** with **TrackerControl**, do below modification on configuration of both DNSCrypt and Tor above:
- Turn off **Use SOCKS5 proxy** in **TrackerControl**.
- Turn off **Outbound prxoy** in **DNSCrypt Settings** in **InviZible Pro**.
- Turn on DNSCrypt but not Tor in **InviZible Pro**.
### Check
- Go to [https://check.torproject.org/](https://check.torproject.org/) to check if your Tor route succeeded. If yes, you will see  "Congratulations. This browser is configured to use Tor." (assume the page's language is set to English).
- Go to [https://whatismyipaddress.com](https://whatismyipaddress.com) (not open source), [https://ipcheck.ing/](https://ipcheck.ing/), or other IP checking websites to see wether it's your device's IP. If not, your Tor route is successful.
- Go to [https://www.dnsleaktest.com](https://www.dnsleaktest.com) (not open source), [https://ipcheck.ing/](https://ipcheck.ing/), or other DNS leak testing websites to check if there is a DNS leak. You will see the DNS servers you set in **DNSCrypt Settings** in **InviZible Pro** instead of your ISP's servers if there's no DNS leak.
### Use Invizible Pro without TrackerControl
- Change to **VPN mode** by tap the 3-point button in the upper right corner.
## Tor Browser
### Install Tor Browser 
You can install **Tor Browser** from Google Play Store: [https://play.google.com/store/apps/details?id=org.torproject.torbrowser](https://play.google.com/store/apps/details?id=org.torproject.torbrowser).
### Introduction of Tor
Tor is a free overlay network for enabling anonymous communication. Built on free and open-source software and more than seven thousand volunteer-operated relays worldwide, users can have their Internet traffic routed via a random path through the network.\
Using Tor makes it more difficult to trace a user's Internet activity by preventing any single point on the Internet (other than the user's device) from being able to view both where traffic originated from and where it is ultimately going to at the same time. This conceals a user's location and usage from anyone performing network surveillance or traffic analysis from any such point, protecting the user's freedom and ability to communicate confidentially.\
Key Features of Tor:
1. Anonymity: Tor allows users to browse the internet anonymously by routing their internet traffic through a network of volunteer-operated servers called nodes or relays. Each relay only knows the IP address of the previous and next node, making it difficult to trace the origin of the traffic.
2. Onion Routing: The name "Onion Router" comes from the way data is encrypted in layers, similar to the layers of an onion. When data is sent through the Tor network, it is encrypted multiple times, and each node decrypts a layer before passing it on to the next, protecting user privacy.
3. Access to .onion Sites: Tor allows users to access hidden services with .onion domain names, which are not reachable through standard web browsers. These sites often provide additional privacy and anonymity.
4. Bypass Censorship: Tor can help users bypass censorship and access restricted content by routing traffic through nodes in different countries.
5. Privacy Tools: The Tor Browser, based on Mozilla Firefox, comes preconfigured with privacy enhancements, making it easier for users to maintain anonymity while browsing.\
The **Tor Browser** for Android is a mobile version of the Tor Browser that utilizes **Mozilla Firefox** for Android codebase.
### NoScript Security Suite
**NoScript** (or **NoScript Security Suite**) is a free and open-source extension for Firefox- and Chromium-based web browsers, written and maintained by Giorgio Maone, a software developer and member of the Mozilla Security Group.\
By default, NoScript blocks active (executable) web content, which can be wholly or partially unblocked by allowlisting a site or domain from the extension's toolbar menu or by clicking a placeholder icon.\
It is recommended to enable NoScript for all Tor sites unless you fully trust it.
## Promoted or Related Works, References, and Bibliography 
### Termux
- F-Droid: [https://f-droid.org/packages/com.termux/](https://f-droid.org/packages/com.termux/).
- GitHub: [https://github.com/termux/termux-app](https://github.com/termux/termux-app).
- X11 packages GitHub: [https://github.com/termux/x11-packages](https://github.com/termux/x11-packages).
- Wiki: [https://wiki.termux.com/](https://wiki.termux.com/).
- Reddit Community: [https://termux.com/community](https://termux.com/community).
### Andronix
- Google Play Store: [https://play.google.com/store/apps/details?id=studio.com.techriz.andronix](https://play.google.com/store/apps/details?id=studio.com.techriz.andronix).
- GitHub: [https://github.com/AndronixApp/AndronixOrigin](https://github.com/AndronixApp/AndronixOrigin).
- Official website: [https://docs.andronix.app/](https://docs.andronix.app/).
### Shizuku
- Official website: [https://shizuku.rikka.app/guide/setup/?night=1](https://shizuku.rikka.app/guide/setup/?night=1).
- Google Play Store: [https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api). 
- GitHub: [https://github.com/RikkaApps/Shizuku](https://github.com/RikkaApps/Shizuku).
### SystemUI Tuner
- Google Play Store: [https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner](https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner). 
- GitHub: [https://github.com/zacharee/Tweaker](https://github.com/zacharee/Tweaker).
### Invizible Pro
- Official website: [https://invizible.net/en/](https://invizible.net/en/).
- F-Droid: [https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/](https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/). 
- Google Play Store: [https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp](https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp). 
- GitHub: [https://github.com/Gedsh/InviZible](https://github.com/Gedsh/InviZible).
### TrackerControl (also known as TC)
- F-Droid: [https://f-droid.org/packages/net.kollnig.missioncontrol.fdroid/](https://f-droid.org/packages/net.kollnig.missioncontrol.fdroid/). 
- GitHub: [https://github.com/TrackerControl/tracker-control-android](https://github.com/TrackerControl/tracker-control-android).
### NetGuard
- Google Play Store: [https://play.google.com/store/apps/details?id=eu.faircode.netguard](https://play.google.com/store/apps/details?id=eu.faircode.netguard). 
- F-Droid: [https://f-droid.org/packages/eu.faircode.netguard/](https://f-droid.org/packages/eu.faircode.netguard/). 
- GitHub: [https://github.com/M66B/NetGuard](https://github.com/M66B/NetGuard).
### DontKillMyApp
- Official website: [https://dontkillmyapp.com/](https://dontkillmyapp.com/).
- Google Play Store: [https://play.google.com/store/apps/details?id=com.urbandroid.dontkillmyapp](https://play.google.com/store/apps/details?id=com.urbandroid.dontkillmyapp).
- F-Droid: [https://f-droid.org/packages/com.urbandroid.dontkillmyapp/](https://f-droid.org/packages/com.urbandroid.dontkillmyapp/).
### aShell
- F-droid: [https://f-droid.org/packages/in.sunilpaulmathew.ashell/](https://f-droid.org/packages/in.sunilpaulmathew.ashell/).
- GitLab: [https://gitlab.com/sunilpaulmathew/ashell](https://f-droid.org/packages/in.sunilpaulmathew.ashell/).
### QEMU
- GitLab: [https://gitlab.com/qemu-project/qemu](https://gitlab.com/qemu-project/qemu).
- Official website: [https://www.qemu.org/](https://www.qemu.org/).
### The Tor Project 
- Google Play Store of Tor Browser: [https://play.google.com/store/apps/details?id=org.torproject.torbrowser](https://play.google.com/store/apps/details?id=org.torproject.torbrowser).
- GitLab of Tor Browser: [https://gitlab.torproject.org/tpo/applications/tor-browser](https://gitlab.torproject.org/tpo/applications/tor-browser).
- GitLab of The Tor Project: [https://gitlab.torproject.org/tpo](https://gitlab.torproject.org/tpo).
- GitLab of the Debian package tor:[https://gitlab.torproject.org/tpo/core/debian/tor](https://gitlab.torproject.org/tpo/core/debian/tor).
- Official website: [https://www.torproject.org/](https://www.torproject.org/).
- Check Tor Project: [https://check.torproject.org/](https://check.torproject.org/).
### MyIP/IPCheck.ing
- Official website: [https://ipcheck.ing/](https://ipcheck.ing/).
- GitHub: [https://github.com/jason5ng32/MyIP](https://github.com/jason5ng32/MyIP).
### Debian
- Official website: [https://www.debian.org/](https://www.debian.org/).
- GitLab: [https://salsa.debian.org/public](https://salsa.debian.org/public).
### Others
- ChatGPT of OpenAI: [https://openai.com/chatgpt/](https://openai.com/chatgpt/).
- awesome-shizuku of timschneeb: [https://github.com/timschneeb/awesome-shizuku](https://github.com/timschneeb/awesome-shizuku).
- shizuku-apps of MrHyperlon101: [https://github.com/MrHyperIon101/shizuku-apps](https://github.com/MrHyperIon101/shizuku-apps).
- Wikipedia: [https://en.m.wikipedia.org/](https://en.m.wikipedia.org/).
- DNS leak test: [https://www.dnsleaktest.com](https://www.dnsleaktest.com).
- What Is My IP Address: [https://whatismyipaddress.com](https://whatismyipaddress.com).
## Contribution
We welcome contributions to this project! Please fork the repository and submit a pull request for your contributions. For clarity and convenience, we recommend making one pull request per revised section or added feature.
## License
This project is licensed under the terms the GNU General Public License v3.0 or later (GPL-3.0-or-later).\
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.\
You should have received a copy of the GNU General Public License along with this program.  If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).\
By contributing to this project, you agree that your contributions will be licensed under GPL-3.0-or-later.