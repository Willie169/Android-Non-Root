# Android-Non-Root
In this tutorial called **Android-Non-Root**, we'll explore a range of powerful, open-source tools to enhancing your Android device’s functionality, security, privacy, and customization without the need for root access.\
Please read the [Global Note](#global-note) before you start or you may encounter errors.

---
## Table of Contents
- [Global Note](#global-note)
- [Termux: A Powerful Terminal Emulation with an Extensive Linux Package Collection](#termux-a-powerful-terminal-emulation-with-an-extensive-linux-package-collection)
  - [Install Termux](#install-termux)
  - [Introduction of Termux](#introduction-of-termux)
  - [Official Wiki and Community of Termux](#official-wiki-and-community-of-termux)
  - [Termux App User Interface](#termux-app-user-interface)
  - [Grant Termux Storage Permission](#grant-termux-storage-permission)
  - [Termux pkg Package Management](#termux-pkg-package-management)
  - [Text Editor: Nano and Vim](#text-editor-nano-and-vim)
  - [Package Command Error](#package-command-error)
  - [`Process completed (signal 9) - press Enter` error](#process-completed-signal-9---press-enter-error)
- [Termux Graphical Environment with VNC Server, and Fluxbox or Openbox Windows Manager, or XFCE, LXQt, or MATE Desktop Environment](#termux-graphical-environment-with-vnc-server-and-fluxbox-or-openbox-windows-manager-or-xfce-lxqt-or-mate-desktop-environment)
  - [Enable the X11 Repository of Termux](#enable-the-x11-repository-of-termux)
  - [VNC Server in Termux](#vnc-server-in-termux)
  - [Fluxbox in Termux](#fluxbox-in-termux)
  - [Openbox in Termux](#openbox-in-termux)
  - [XFCE in Termux](#xfce-in-termux)
  - [LXQt in Termux](#lxqt-in-termux)
  - [MATE in Termux](#mate-in-termux)
  - [Further Readings and References about Termux Graphical Environment](#further-readings-and-references-about-termux-graphical-environment)
- [Andronix with Termux: Install Linux Distributions in Termux on Non-Rooted Android Devices](#andronix-with-termux-install-linux-distributions-in-termux-on-non-rooted-android-devices)
  - [Optional but Recommended: Install Andronix App](#optional-but-recommended-install-andronix-app)
  - [Introduction of Andronix and PRoot](#introduction-of-andronix-and-proot)
  - [Install an OS with Andronix](#install-an-os-with-andronix)
  - [Uninstall an OS (Not Modded) with Andronix](#uninstall-an-os-not-modded-with-andronix)
  - [Sound Output from PRoot OS](#sound-output-from-proot-os)
  - [Example: Debian with XFCE Desktop Environment](#example-debian-with-xfce-desktop-environment)
  - [Example: Debian with CLI Only](#example-debian-with-cli-only)
  - [Example: Uninstall Debian OS (Not Modded)](#example-uninstall-debian-os-not-modded)
- [QEMU System Emulation with Termux: Full System Emulation of Multiple CPU Architectures and Operating Systems with ISO Image Method or QCOW2 Cloud Image](#qemu-system-emulation-with-termux-full-system-emulation-of-multiple-cpu-architectures-and-operating-systems-with-iso-image-method-or-qcow2-cloud-image)
  - [Install QEMU](#install-qemu)
  - [ISO Image method](#iso-image-method)
  - [QCOW2 Image Method](#qcow2-image-method)
  - [Window Managers or Desktop Environments](#window-managers-or-desktop-environments)
  - [Login](#login)
  - [Resize Disk Space](#resize-disk-space)
  - [Check Image Info](#check-image-info)
  - [Check VM Disk](#check-vm-disk)
  - [OpenSSH](#openssh)
  - [Further Readings and References about QEMU](#further-readings-and-references-about-qemu)
- [AVNC: A VNC Client for Android](#avnc-a-vnc-client-for-android)
  - [Install AVNC](#install-avnc)
  - [Connect a VNC Server](#connect-a-vnc-server)
  - [Features of AVNC](#features-of-avnc)
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
  - [Check Whether the Tor Route Setup Is Successful](#check-whether-the-tor-route-setup-is-successful)
  - [Use Invizible Pro without TrackerControl](#use-invizible-pro-without-trackercontrol)
- [Tor Browser](#tor-browser)
  - [Install Tor Browser](#install-tor-browser)
  - [Introduction of Tor](#introduction-of-tor)
  - [NoScript Security Suite](#noscript-security-suite)
- [OpenSSL: Secure Sockets Layer (SSL) and Transport Layer Security (TLS) Protocols and Cryptography Library Implementation](#openssl-secure-sockets-layer-ssl-and-transport-layer-security-tls-protocols-and-cryptography-library-implementation)
  - [Introduction of OpenSSL](#introduction-of-openssl)
  - [Installation of OpenSSL in Termux](#installation-of-openssl-in-termux)
  - [Installation of OpenSSL in Debian](#installation-of-openssl-in-debian)
  - [RSA (Rivest-Shamir-Adleman)](#rsa-rivest-shamir-adleman)
  - [Symmetric Encryption](#symmetric-encryption)
- [File and Directory Management of Termux and Linux](#file-and-directory-management-of-termux-and-linux)
  - [`cp` (Copy files and directories)](#cp-copy-files-and-directories)
  - [`mv` (Move or rename files and directories)](#mv-move-or-rename-files-and-directories)
  - [`rm` (Remove files or directories)](#rm-remove-files-or-directories)
  - [`mkdir` (Create directories)](#mkdir-create-directories)
  - [`ls` (List directory contents)](#ls-list-directory-contents)
  - [`rmdir` (Remove empty directories)](#rmdir-remove-empty-directories)
  - [`find` (Search for files and directories)](#find-search-for-files-and-directories)
  - [`touch` (Create or update file timestamps)](#touch-create-or-update-file-timestamps)
  - [`chmod` (Change File Permissions)](#chmod-change-file-permissions)
  - [`chown` (Change File Ownership)](#chown-change-file-ownership)
  - [`df` (Disk Space Usage)](#df-disk-space-usage)
  - [`du` (Disk Usage)](#du-disk-usage)
  - [pwd (Check Current Directory)](#pwd-check-current-directory)
- [OpenSSH with Linux or Termux and SFTP Server Mount on Material Files: Secure Remote Access](#openssh-with-linux-or-termux-and-sftp-server-mount-on-material-files-secure-remote-access)
  - [Introduction of SSH and OpenSSH](#introduction-of-ssh-and-openssh)
  - [OpenSSH Server in Linux](#openssh-server-in-linux)
  - [OpenSSH Server in Termux](#openssh-server-in-termux)
  - [OpenSSH Client in Linux or Termux](#openssh-client-in-linux-or-termux)
  - [SCP (Secure Copy Protocol)](#scp-secure-copy-protocol)
  - [SFTP Server Mound on Material Files](#sftp-server-mound-on-material-files)
  - [Further Readings and References about OpenSSH with Linux and Termux](#further-readings-and-references-about-openssh-with-linux-and-termux)
- [Linux Command Library](#linux-command-library)
  - [Introduction of Linux Command Library](#introduction-of-linux-command-library)
  - [Install and Use Linux Command Library](#install-and-use-linux-command-library)
- [Linux and Termux Odds and Ends](#linux-and-termux-odds-and-ends)
  - [apt (Termux, Debian, etc.)](#apt-termux-debian-etc)
  - [SIGINT: Send Signal Interrupt from Keyboard (Termux, Debian, etc.)](#sigint-send-signal-interrupt-from-keyboard-termux-debian-etc)
  - [Commands for Copy](#commands-for-copy)
- [Promoted or Related Works, References, and Bibliography](#promoted-or-related-works-references-and-bibliography)
  - [Termux by Fredrik Fornwall / Termux / termux](#termux-by-fredrik-fornwall--termux--termux)
  - [Andronix by Devriz Technologies LLP / Andronix App /AndronixApp](#andronix-by-devriz-technologies-llp--andronix-app-andronixapp)
  - [Shizuku by Xingchen & Rikka / RikkaApps](#shizuku-by-xingchen--rikka--rikkaapps)
  - [SystemUI Tuner by Zachary Wander / zacharee](#systemui-tuner-by-zachary-wander--zacharee)
  - [Invizible Pro by Garmatin Oleksandr / Oleksandr Garmatin / Gedsh](#invizible-pro-by-garmatin-oleksandr--oleksandr-garmatin--gedsh)
  - [TrackerControl / TC by TrackerControl / Oxford HCC](#trackercontrol--tc-by-trackercontrol--oxford-hcc)
  - [NetGuard by Marcel Bokhorst / M66B / Marcel Bokhorst, FairCode BV](#netguard-by-marcel-bokhorst--m66b--marcel-bokhorst-faircode-bv)
  - [DontKillMyApp / DontKillMyApp: Make apps work by Urbandroid Team / urbandroid-team / Petr Nálevka (Urbandroid)](#dontkillmyapp--dontkillmyapp-make-apps-work-by-urbandroid-team--urbandroid-team--petr-nlevka-urbandroid)
  - [aShell by Sunil Paul Mathew M. / sunilpaulmathew](#ashell-by-sunil-paul-mathew-m--sunilpaulmathew)
  - [QEMU by Qemu Project / QEMU](#qemu-by-qemu-project--qemu)
  - [Tor and Tor Browser by The Tor Project](#tor-and-tor-browser-by-the-tor-project)
  - [MyIP/IPCheck.ing by Jason Ng / jason5ng32](#myipipchecking-by-jason-ng--jason5ng32)
  - [Debian](#debian)
  - [Linux Command Library by Simon Schubert / SimonSchubert](#linux-command-library-by-simon-schubert--simonschubert)
  - [OpenSSL by OpenSSL / openssl](#openssl-by-openssl--openssl)
  - [ANC by Gaurav Ujwal / gujjwal00](#anc-by-gaurav-ujwal--gujjwal00)
  - [Material Files / MaterialFiles by Hai Zhang / zhanghai](#material-files--materialfiles-by-hai-zhang--zhanghai)
  - [Others](#others)
- [Contribution](#contribution)
- [License](#license)
---
## Global Note
- Many sections of the tutorial mention **Termux** and Linux. Read the tutorial about them in [Termux: A Powerful Terminal Emulation with an Extensive Linux Package Collection](#termux-a-powerful-terminal-emulation-with-an-extensive-linux-package-collection), [Termux Graphical Environment with VNC Server, and Fluxbox or Openbox Windows Manager, or XFCE, LXQt, or MATE Desktop Environment](#termux-graphical-environment-with-vnc-server-and-fluxbox-or-openbox-windows-manager-or-xfce-lxqt-or-mate-desktop-environment), [File and Directory Management of Termux and Linux](#file-and-directory-management-of-termux-and-linux), [OpenSSH with Linux or Termux: Secure Remote Access](#openssh-with-linux-or-termux-secure-remote-access), [Linux Command Library](#linux-command-library), and [Linux and Termux Odds and Ends](#linux-and-termux-odds-and-ends).
- Always run `apt update` before any `apt install` command in **Termux** or Linux, including virtual machines and emulations.
- Add `sudo` at the beginning of commands in Linux if needed, and remove `sudo` from the beginning of commands in **Termux**.
- Always run `pkg update` before any `pkg install` command in **Termux**.
- Always type `Y`, `y`, `Yes`, or `yes` in response to any prompts that request confirmation during command execution.
- Most of the software mentioned in this tutorial is open source unless explicitly stated otherwise. However, it is provided WITHOUT ANY WARRANTY, including but not limited to the implied warranties of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
- Some sections about Linux usages are included since we also cover methods to build a Linux VM in Android device.
- Change the file names, directories, and paths in the commands in the tutorial to the actual ones of yours.
- Many sections of the tutorial mention VNC server. You can connect VNC server with a VNC client on any devices (Linux, Windows, macOS, Android, IOS, etc.). Read the tutorial about **AVNC**, a VNC client for Android, in [AVNC: A VNC Client for Android](#avnc-a-vnc-client-for-android).
- You may encounter `Process completed (signal 9) - press Enter` error even if you follow the steps in this tutorial. Read the tutorial about how to fix it in [`Process completed (signal 9) - press Enter` error](#process-completed-signal-9---press-enter-error).
- Many sections of the tutorial mention ADB (Android Debug Bridge). You can connect to an Android device's ADB shell from another device via **Android SDK Platform Tools** or from the same device via **Shizuku**. Read the tutorial about **Shizuku** ADB connection in [Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell](#shizuku-systemui-tuner-and-ashell-use-local-adb-of-android-device-on-terminals-such-as-termux-without-another-device-with-shizuku-leave-developer-options-off-when-doing-so-with-systemui-tuner-and-use-adb-with-features-like-autocomplete-suggestion-with-ashell).
- Many sections of the tutorial mention **Tor**. Read the tutorial about it in [Introduction of Tor](#introduction-of-tor).
- Uncommenting a line means to remove the comment signs (`#` for bash) from the beginning of the line.
- When the tutorial uses `nano`, `vim`, or `vi` to edit a file, you can use any text editor you want, such `nano`, `vim`, and `vi`.
---
## Termux: A Powerful Terminal Emulation with an Extensive Linux Package Collection
### Install Termux
- Download and Install **Termux** from F-Droid: [https://f-droid.org/packages/com.termux/](https://f-droid.org/packages/com.termux/).
- **Note**: It is recommended to use **Termux**'s F-Droid version and avoid using Google Play version because the latter is depreciated.
- Many of the following guides work on or depend on **Termux**.
- If you installed termux from Google Play or a very old version, then you will receive package command errors. Google Play builds are deprecated and no longer supported. It is highly recommended that you update to termux-app v0.118.0 or higher as soon as possible for various bug fixes, including a critical world-readable vulnerability reported at [https://termux.github.io/general/2022/02/15/termux-apps-vulnerability-disclosures.html](https://termux.github.io/general/2022/02/15/termux-apps-vulnerability-disclosures.html). It is recommended that you shift to F-Droid or Github releases.
### Introduction of Termux
- Termux is an Android terminal application and Linux environment. Termux combines powerful terminal emulation with an extensive Linux package collection. Some of the commands available in Linux are available in **Termux** too, such as `cp`, `mv`, `ls`, `mkdir`, `apt`, and `apt-get`.
- Features:
  - Enjoy the bash and zsh shells.
  - Edit files with nano and vim.
  - Access servers over ssh.
  - Compile code with gcc and clang.
  - Use the python console as a pocket calculator.
  - Check out projects with git and subversion.
  - Run text-based games with frotz.
  - and more
- At first startup, a small base system is downloaded. Desired packages can then be installed using the apt package manager, which is known from the Debian and Ubuntu Linux distributions. To learn more, access the built-in help by long-pressing anywhere on the terminal and selecting the Help menu option.
### Official Wiki and Community of Termux
- Wiki: [https://wiki.termux.com/](https://wiki.termux.com/).
- Reddit Community: [https://termux.com/community](https://termux.com/community).
### Termux App User Interface
- Pinch to zoom in or out.
- Long press to Copy, Paste, Select URL, Share transcript, Autofill password, Reset, Kill process, Style, Keep screen on, Help, Settings, or Report Issue.
- Pull out the left menu to open **Termux Settings**, start another **NEW SESSION**, or launch **KEYBOARD**.
### Grant Termux Storage Permission
Run the following command **Termux**:
```
termux-setup-storage
```
and tap **Allow**.
### Termux pkg Package Management
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
### Text Editor: Nano and Vim
Nano and Vim are both text editors used in Unix-like operating systems. 
#### Nano
Install:
```
apt install nano
```
Nano is a simple, user-friendly text editor designed for ease of use.
- Basic Functions: It supports basic editing features like cut, copy, paste, search, and replace.
- Command Shortcuts: Common commands are displayed at the bottom of the screen (e.g., ^X to exit).
- Usage: Typically used for quick edits or for users who prefer a no-frills experience. You can open a file by typing `nano filename`.
#### Vim
Vim (Vi IMproved) is a highly configurable and powerful text editor, which is an enhanced version of the original Vi editor. It is favored by experienced users and programmers.
- Modes: Vim operates in different modes (Normal, Insert, Visual, etc.), allowing for more complex editing tasks and commands.
- Extensibility: Users can customize Vim extensively through configuration files and plugins.
- Powerful Editing Capabilities: It has a steep learning curve but offers efficient ways to manipulate text.
- Usage: Often used for programming and extensive text manipulation. You can open a file by typing `vim filename`.
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
#### Further Readings and References about Package Command Error
- [https://github.com/termux/termux-packages/wiki/Package-Management](https://github.com/termux/termux-packages/wiki/Package-Management).
- [https://github.com/termux/termux-packages/issues/6726](https://github.com/termux/termux-packages/issues/6726).
- [https://github.com/termux/termux-packages/issues/6455](https://github.com/termux/termux-packages/issues/6455).
- [https://github.com/termux/termux-packages/wiki/Mirrors](https://github.com/termux/termux-packages/wiki/Mirrors).
### `Process completed (signal 9) - press Enter` error
Some Android OS will kill any (phantom) processes greater than 32 (limit is for all apps combined) and also kill any processes using excessive CPU. You may get `Process completed (signal 9) - press Enter` message in the terminal without actually exiting the shell process yourself. Here is the guide of how to turn it off.
#### Fix for Stock Android 12L and beyond
- In phone's **Settings** or something similar, go to **About Phone > Software Information** or something similar, and tap the **Version Number** seven times to enable **Developer Options**. Some phones may have different methods to enable **Developer Options**.
- Find the section named **Feature Flags**, enter via clicking it.
- Find the switch to toggle off **settings_enable_monitor_phantom_procs** to disable phantom process killer.
- To enable phantom process killer again, just toggle on the switch.
#### Fix for QEMs like OneUI, MiUi, Samsung, etc. and other non-stock Android 12L and beyond
- Connect to Android Debug Bridge (ADB) of your Android device from Linux, Windows, MacOS, etc. or via **Shizuku**.
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
#### Further Readings and References about Process completed (signal 9) - press Enter error
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
### Enable the X11 Repository of Termux
X11 packages are available in a separate APT repository. You can enable it by running the following command:
```
pkg install x11-repo
```
It will automatically add appropriate sources.list file and PGP key.\
You can disable this repository by running the following command:
```
pkg uninstall x11-repo
```
### VNC Server in Termux
In this section, you will learn how to set up a VNC server in **Termux** for graphical output.
#### Install TigerVNC
```
pkg install tigervnc
```
#### Start a VNC Server
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
#### Kill All VNC Servers
```
vncserver -kill localhost:1
```
Change the port with the actual port your VNC server started on.
### Fluxbox in Termux
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
---
## Fluxbox desktop.

# Generate menu.
fluxbox-generate_menu

# Start fluxbox.
fluxbox &
```
Fluxbox will start automatically on VNC server startup.
### Openbox in Termux
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
### XFCE in Termux
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
### LXQt in Termux
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
### MATE in Termux
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
### Further Readings and References about Termux Graphical Environment
- [https://wiki.termux.com/wiki/Graphical_Environment](https://wiki.termux.com/wiki/Graphical_Environment).
- [https://github.com/termux/x11-packages](https://github.com/termux/x11-packages).
---
## Andronix with Termux: Install Linux Distributions in Termux on Non-Rooted Android Devices
### Optional but Recommended: Install Andronix App
Install Andronix from Google Play: [https://play.google.com/store/apps/details?id=studio.com.techriz.andronix](https://play.google.com/store/apps/details?id=studio.com.techriz.andronix).
### Introduction of Andronix and PRoot
- **Andronix** is an app that lets you install Linux distributions like Ubuntu, Debian, Manjaro etc. in **Termux** on non-rooted Android devices with **PRoot**. **Andronix** provide paid, close-source modded OS too, which won't be mentioned in this tutorial.
- **PRoot** is a user-space implementation of chroot, mount --bind, and binfmt_misc. This means that users don't need any privileges or setup to do things like using an arbitrary directory as the new root file system, making files accessible somewhere else in the file system hierarchy, or executing programs built for another CPU architecture transparently through QEMU user-mode.
- chroot is an operation on Unix and Unix-like operating systems that changes the apparent root directory for the current running process and its children. A program that is run in such a modified environment cannot name (and therefore normally cannot access) files outside the designated directory tree.
- Further readings and references:
  - [https://en.m.wikipedia.org/wiki/Chroot](https://en.m.wikipedia.org/wiki/Chroot).
  - [https://github.com/AndronixApp/AndronixOrigin](https://github.com/AndronixApp/AndronixOrigin).
### Install an OS with Andronix
- Open **Andronix** app.
- Click the **Linux Distribution** card.
- Click on the Linux distribution you want to install. It is recommended to get started with Ubuntu or Debian if you are overwhelmed by the options.
- Click on the user interface you want. Graphical User Interface or GUI is the visual interface that you interact with to do things in your Linux distribution. Command Line Interface or CLI is the text-based interface that you interact with to execute commands and perform tasks in your Linux distribution. 
  - Desktop Environment: You can choose a Desktop Environment if you would like to use your mouse as well as your keyboard, or you've little or no experience with Linux. 
  - Window Manager: You can choose a Window Manager if you only want to use your keyboard to manage Windows and other OS-level tasks. These are pretty light and fast, but do require some skill before getting productive. 
  - CLI Only: If you don't want a Graphical User-interface, you can go ahead with the Command Line Interface. You'll have a terminal, which is enough if you know what you're doing in your session.
- **Andronix** will automatically copy the command to your clipboard.
- Paste and run in **Termux**.
### Uninstall an OS (Not Modded) with Andronix
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
### Example: Debian with XFCE Desktop Environment
#### Install Debian with XFCE
```
pkg update -y && pkg install wget curl proot tar -y && wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Installer/Debian/debian-xfce.sh -O debian-xfce.sh && chmod +x debian-xfce.sh &&  bash debian-xfce.sh
```
The file directory of the Debian OS will be `debian-fs`. You can read, write, and execute files in it both in **Termux** or in the Debian OS.
#### Turn on the OS (CLI)
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
#### Turn on the OS (CLI)
```
./start-debian.sh
```
### Example: Uninstall Debian OS (Not Modded)
```
wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Uninstall/Debian/UNI-debian.sh && chmod +x UNI-debian.sh && bash UNI-debian.sh
```
---
## QEMU System Emulation with Termux: Full System Emulation of Multiple CPU Architectures and Operating Systems with ISO Image Method or QCOW2 Cloud Image
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
sudo apt update
sudo apt install parted e2fsprogs
sudo parted /dev/sda
print
fix
resizepart 1 100%
quit
sudo resize2fs /dev/sda1
```
### Check Image Info
In **Termux** (outside VM), run:
```
qemu-img info debian-12-nocloud-amd64.qcow2
```
Change `debian-12-nocloud-amd64.qcow2` to the real file name. 
### Check VM Disk
Inside VM, run:
```
df -h
```
and for partition, run:
```
lsblk
```
### OpenSSH
You can start a SSH server in QEMU VM and start a client in another **Termux** session with `openssh`.
### Further Readings and References about QEMU
- [https://ivonblog.com/posts/termux-qemu-system-linux/](https://ivonblog.com/posts/termux-qemu-system-linux/)
- [https://www.qemu.org/docs/master/index.html](https://www.qemu.org/docs/master/index.html)
- [https://www.debian.org/distrib/index.en.html](https://www.debian.org/distrib/index.en.html)
- [https://chatgpt.com/](https://chatgpt.com/)
- [https://www.reddit.com/r/debian/s/s871vXlGRI](https://www.reddit.com/r/debian/s/s871vXlGRI)
---
## AVNC: A VNC Client for Android
### Install AVNC
You can install AVNC from F-Droid: [https://f-droid.org/packages/com.gaurav.avnc/](https://f-droid.org/packages/com.gaurav.avnc/).
### Connect a VNC Server
- Tap the **+** sign in the lower right corner, 
- Input **Name** (arbitrary name), **Host** address (`localhost` for localhost), and **Port**, input **Username** and **Password** if needed, adjust **ADVANCED** options if needed, and then tap **SAVE**.
- Tap the Server name to connect.
- If you encounter incorrect mouse display or recieving, going to **Settings => Input => Mouse** and toggling on **Hide local pointer** may help.
### Features of AVNC
- Gesture styles: Automatic, Touchscreen (Do actions at touch-point), or Touchpad mode (Do actions at pointer).
- Material Design: Dark theme and light theme.
- Configurable gestures: Configure the meaning of each gesture.
- Tight encoding.
- Virtual Keys: Go to **Settings => Input => Virtual keys => Customize keys** to customize Virtual Key layout.
- Picture-in-Picture mode.
- View-only mode.
- Zeroconf Server Discovery.
- TLS support: AnonTLS and VeNCrypt.
- SSH tunnel: VNC over SSH.
- Import/Export servers.
- VNC Repeater support.
- Clipboard Sync with server.
- Pause update in background.
- Automatic reconnection.
- Automatically find supported servers.
---
## Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell
### Install Shizuku
- Install **Shizuku** from Google Play: [https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api).
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
2. Use a text editor to replace `PKG` in `rish` with the package name of your terminal application. Take **Termux** for example, **Termux**'s package name is `com.termux`. Run `termux-setup-storage` and tap **Allow** to grant **Termux** storage permission if you want to use it to run ADB commands (and many other commands). 
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
2. **Note**: It is recommended to use **Termux**'s F-Droid version and avoid using Google Play version because the latter is depreciated. F-Droid: [https://f-droid.org/packages/com.termux/](https://f-droid.org/packages/com.termux/).
### Install SystemUI Tuner
Install **SystemUI Tuner** (pub: **Zachary Wander**) from Google Play: [https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner](https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner).
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
### Install InviZible Pro
- Download and install **InviZible Pro** from F-Droid or Google Play. F-Droid: [https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/](https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/). Google Play: [https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp](https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp).
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
- **Note**: The above guide, including the setting `.xml`, can be used in **NetGuard** as well because **TrackerControl** uses **NetGuard**'s code. However, **Traffic log** feature is not available in **NetGuard**'s free version but only available in **TrackerControl** and **NetGuard**'s **Pro** version. **NetGuard** is available on Google Play and F-Droid. Google Play: [https://play.google.com/store/apps/details?id=eu.faircode.netguard](https://play.google.com/store/apps/details?id=eu.faircode.netguard). F-Droid: [https://f-droid.org/packages/eu.faircode.netguard/](https://f-droid.org/packages/eu.faircode.netguard/). 
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
### Check Whether the Tor Route Setup Is Successful
- Go to [https://check.torproject.org/](https://check.torproject.org/) to check if your Tor route succeeded. If yes, you will see  "Congratulations. This browser is configured to use Tor." (assume the page's language is set to English).
- Go to [https://whatismyipaddress.com](https://whatismyipaddress.com) (not open source), [https://ipcheck.ing/](https://ipcheck.ing/), or other IP checking websites to see wether it's your device's IP. If not, your Tor route is successful.
- Go to [https://www.dnsleaktest.com](https://www.dnsleaktest.com) (not open source), [https://ipcheck.ing/](https://ipcheck.ing/), or other DNS leak testing websites to check if there is a DNS leak. You will see the DNS servers you set in **DNSCrypt Settings** in **InviZible Pro** instead of your ISP's servers if there's no DNS leak.
### Use Invizible Pro without TrackerControl
- Change to **VPN mode** by tap the 3-point button in the upper right corner.
---
## Tor Browser
### Install Tor Browser 
You can install **Tor Browser** from Google Play: [https://play.google.com/store/apps/details?id=org.torproject.torbrowser](https://play.google.com/store/apps/details?id=org.torproject.torbrowser).
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
---
## OpenSSL: Secure Sockets Layer (SSL) and Transport Layer Security (TLS) Protocols and Cryptography Library Implementation
### Introduction of OpenSSL
**OpenSSL** is an open-source library that provides a comprehensive suite of cryptographic tools for securing communications over computer networks. It implements the Secure Sockets Layer (SSL) and Transport Layer Security (TLS) protocols and includes a general-purpose cryptographic library that supports a variety of encryption algorithms, hashing functions, digital signatures, key generation, certificate management, and secure random number generation.
### Installation of OpenSSL in Termux
```
pkg install openssl openssl-tool
```
### Installation of OpenSSL in Debian
```
sudo apt install openssl libssl-dev
```
### RSA (Rivest-Shamir-Adleman)
#### Introduction of RSA
RSA is a widely used asymmetric encryption algorithm that underpins many security protocols. Its strength lies in the difficulty of factoring large prime numbers. The algorithm involves key generation, encryption, and decryption processes utilizing a pair of keys: a public key, shared openly, and a private key, kept secret.
1. **Mathematical Foundation and Key Generation:**  
   The algorithm begins by selecting two large prime numbers, \( p \) and \( q \). These are multiplied to produce \( n = p \times q \), the modulus for both keys. The totient function \( \phi(n) = (p-1)(q-1) \) is computed. A public exponent \( e \), typically 65537, is chosen, which is coprime to \( \phi(n) \). The public key is \( (n, e) \). The private exponent \( d \) is calculated such that \( d \cdot e \equiv 1 \mod \phi(n) \), making \( (n, d) \) the private key. RSA's security relies on the ease of multiplying primes and the difficulty of factoring their product.
2. **Public Encryption and Private Decryption (Communication):**  
   After generating the keys, RSA can be used for secure communication. To encrypt a message \( m \), the sender uses the recipient's public key \( (n, e) \) with the formula \( c \equiv m^e \mod n \), where \( c \) is the ciphertext. Only the intended recipient, with the private key \( (n, d) \), can decrypt it using \( m \equiv c^d \mod n \).
3. **Private Encryption and Public Decryption (Signature):**  
   RSA can also create digital signatures for authenticity and non-repudiation. The sender encrypts a hash \( h \) of the message with their private key \( (n, d) \): \( s \equiv h^d \mod n \). This signature \( s \) accompanies the original message \( m \). The recipient verifies the signature by decrypting it with the sender's public key \( (n, e) \): \( h' \equiv s^e \mod n \). If \( h' \) matches the hash of the received message \( m \), it confirms the message's authenticity.
4. **Applications:**  
   RSA is employed in various applications that require secure communication and data integrity:
   - **Secure Web Communications (HTTPS):** RSA is commonly used in SSL/TLS protocols to establish secure connections between web browsers and servers.
   - **Email Encryption:** Services like PGP (Pretty Good Privacy) use RSA for encrypting emails, ensuring only intended recipients can read them.
   - **Digital Signatures:** RSA is used to sign software and documents, verifying the identity of the sender and ensuring the content hasn't been altered.
   - **Secure Key Exchange:** RSA can facilitate the secure exchange of symmetric keys for faster encryption methods, allowing secure communication without the need for shared secrets.
#### Generate New Private Key
```
openssl genrsa -out /path/privatekeyfilename.pem 2048
```
`2048` means 2048 iterations, change the number as needed.
#### Generate Public Key from Private Key
```
openssl rsa -pubout -in /path/privatekeyfilename.pem -out /path/publickeyfilename.pem
```
#### Encrypt with Public Key
```
openssl pkeyutl -in /path/filename.txt -out /path/publickeyencryptedfilename.txt -inkey /path/publickeyfilename.pem -pubin -encrypt
```
#### Decrypt with Public Key
```
openssl pkeyutl -in /path/publickeyencryptedfilename.txt -out /path/filename.txt -inkey /path/privatekeyfilename.pem -decrypt
```
#### Encrypt with Private Key
```
openssl pkeyutl -in /path/filename.txt -out /path/privatekeyencryptedfilename.txt -inkey /path/privatekeyfilename.pem -encrypt
```
#### Decrypt with Private Key
```
openssl pkeyutl -in /path/privatekeyencryptedfilename.txt -out /path/filename.txt -inkey /path/publickeyfilename.pem -pubin -decrypt
```
#### Sign a Raw File
```
openssl pkeyutl -in filename.txt -rawin -out signed_filename.txt -inkey keyfile/privatekeyfile.pem -sign
```
#### Sign a Hex File
```
openssl pkeyutl -in hexfilename.txt -out signed_filename.txt -inkey keyfile/privatekeyfile.pem -sign
```
#### Verify a Signature Against a Raw File
```
openssl pkeyutl -in filename.txt -rawin -out verification.txt -sigfile signed_filename.txt -inkey keyfile/publickeyfile.pem -pubin -verify
```
#### Verify a Signature Against a Hex File
```
openssl pkeyutl -in hexfilename.txt -rawin -out verification.txt -sigfile signed_filename.txt -inkey keyfile/publickeyfile.pem -pubin -verify
```
#### All Command Options of Pkeyutl
```
openssl pkeyutl [-help] [-in file] [-rawin] [-digest algorithm] [-out file] [-sigfile file] [-inkey filename|uri] [-keyform DER|PEM|P12|ENGINE] [-passin arg] [-peerkey file] [-peerform DER|PEM|P12|ENGINE] [-pubin] [-certin] [-rev] [-sign] [-verify] [-verifyrecover] [-encrypt] [-decrypt] [-derive] [-kdf algorithm] [-kdflen length] [-pkeyopt opt:value] [-pkeyopt_passin opt[:passarg]] [-hexdump] [-asn1parse] [-engine id] [-engine_impl] [-rand files] [-writerand file] [-provider name] [-provider-path path] [-propquery propq] [-config configfile]
```
**DESCRIPTION**: This command can be used to perform low-level public key operations using any supported algorithm.\
**OPTIONS**:
- -help: Print out a usage message.
- -in filename: This specifies the input filename to read data from or standard input if this option is not specified.
- -rawin: This indicates that the input data is raw data, which is not hashed by any message digest algorithm. The user can specify a digest algorithm by using the -digest option. This option can only be used with -sign and -verify and must be used with the Ed25519 and Ed448 algorithms.
- -digest algorithm: This specifies the digest algorithm which is used to hash the input data before signing or verifying it with the input key. This option could be omitted if the signature algorithm does not require one (for instance, EdDSA). If this option is omitted but the signature algorithm requires one, a default value will be used. For signature algorithms like RSA, DSA and ECDSA, SHA-256 will be the default digest algorithm. For SM2, it will be SM3. If this option is present, then the -rawin option must be also specified.
- -out filename: Specifies the output filename to write to or standard output by default.
- -sigfile file: Signature file, required for -verify operations only
- -inkey filename|uri: The input key, by default it should be a private key.
- -keyform DER|PEM|P12|ENGINE: The key format; unspecified by default. See openssl-format-options(1) for details.
- -passin arg: The input key password source. For more information about the format of arg see openssl-passphrase-options(1).
- -peerkey file: The peer key file, used by key derivation (agreement) operations.
- -peerform DER|PEM|P12|ENGINE: The peer key format; unspecified by default. See openssl-format-options(1) for details.
- -pubin: By default a private key is read from the key input. With this option a public key is read instead. If the input contains no public key but a private key, its public part is used.
- -certin: The input is a certificate containing a public key.
- -rev: Reverse the order of the input buffer. This is useful for some libraries (such as CryptoAPI) which represent the buffer in little endian format.
- -sigfile file: Signature file, required for -verify operations only
- -inkey filename|uri: The input key, by default it should be a private key.
- -keyform DER|PEM|P12|ENGINE: The key format; unspecified by default. See openssl-format-options(1) for details.
- -passin arg: The input key password source. For more information about the format of arg see openssl-passphrase-options(1).
- -peerkey file: The peer key file, used by key derivation (agreement) operations.
- -peerform DER|PEM|P12|ENGINE: The peer key format; unspecified by default. See openssl-format-options(1) for details.
- -pubin: By default a private key is read from the key input. With this option a public key is read instead. If the input contains no public key but a private key, its public part is used.
- -certin: The input is a certificate containing a public key.
- -rev: Reverse the order of the input buffer. This is useful for some libraries (such as CryptoAPI) which represent the buffer in little endian format.
- -sign: Sign the input data (which must be a hash) and output the signed result. This requires a private key.
- -verify: Verify the input data (which must be a hash) against the signature file and indicate if the verification succeeded or failed.
- -verifyrecover: Verify the input data (which must be a hash) and output the recovered data.
- -encrypt: Encrypt the input data using a public key.
- -decrypt: Decrypt the input data using a private key.
- -derive: Derive a shared secret using the peer key.
- -kdf algorithm: Use key derivation function algorithm. The supported algorithms are at present TLS1-PRF and HKDF. Note: additional parameters and the KDF output length will normally have to be set for this to work. See EVP_PKEY_CTX_set_hkdf_md(3) and EVP_PKEY_CTX_set_tls1_prf_md(3) for the supported string parameters of each algorithm.
- -kdflen length: Set the output length for KDF.
- -pkeyopt opt:value: Public key options specified as opt:value. See NOTES below for more details.
- -pkeyopt_passin opt[:passarg]: Allows reading a public key option opt from stdin or a password source. If only opt is specified, the user will be prompted to enter a password on stdin. Alternatively, passarg can be specified which can be any value supported by openssl-passphrase-options(1).
- -hexdump: hex dump the output data.
- -asn1parse: Parse the ASN.1 output data, this is useful when combined with the -verifyrecover option when an ASN1 structure is signed.
- -engine id: See "Engine Options" in openssl(1). This option is deprecated.
- -engine_impl: When used with the -engine option, it specifies to also use engine id for crypto operations.
- -rand files, -writerand file: See "Random State Options" in openssl(1) for details.
- -provider name: -provider-path path: -propquery propq: See "Provider Options" in openssl(1), provider(7), and property(7).
- -config configfile: See "Configuration Option" in openssl(1).
### Symmetric Encryption
#### Introduction of Symmetric Encryption
Symmetric encryption uses the same key for both encryption and decryption, requiring both parties to possess and keep the key confidential.
1. **Single Key**: Both parties use the same key, making key management critical. If the key is compromised, the encrypted data is at risk.
2. **Speed**: Symmetric algorithms are faster than asymmetric ones, making them ideal for encrypting large amounts of data, particularly in real-time applications.
3. **Confidentiality**: Only authorized parties with the correct key can decrypt the data, maintaining its confidentiality.
4. **Common Algorithms**:
   - **AES**: Secure and efficient, with key sizes of 128, 192, or 256 bits.
   - **DES**: Uses a 56-bit key; now considered insecure.
   - **3DES**: Applies DES three times with different keys but slower than AES.
   - **Blowfish**: A fast cipher with key lengths of 32 to 448 bits.
   - **Twofish**: A more advanced version of Blowfish, supporting keys up to 256 bits.
   - **RC4**: A stream cipher known for speed but now insecure in many uses.
5. **Applications**:
   - **Data Encryption**: Secures data in storage and transmission (e.g., SSL/TLS).
   - **VPNs**: Encrypts data over public networks to protect privacy.
   - **Disk Encryption**: Protects data on devices, ensuring confidentiality if lost or stolen.
   - **Secure Communications**: Used in messaging apps and secure protocols.
   - **Cloud Storage Security**: Encrypts data in the cloud, protecting it from unauthorized access.
#### AES-256-CBC Encryption
```
openssl enc -aes-256-cbc -in file.rar -out encfile.rar -pass pass:1234567890123456789012345678901234567890123456789012345678901234 -base64 -iv 12345678901234567890123456789012 -S 1234567890123456 -md sha-256 -iter 2048 -pbkdf2 -p
```
#### AES-256-CBC Decryption
```
openssl enc -aes-256-cbc -in encfile.rar -out file.rar -pass pass:1234567890123456789012345678901234567890123456789012345678901234 -d -base64 -iv 12345678901234567890123456789012 -S 1234567890123456 -md sha-256 -iter 2048 -pbkdf2
```
#### All Command Options of Enc / Cipher
```
openssl enc|cipher [-cipher] [-help] [-list] [-ciphers] [-in filename] [-out filename] [-pass arg] [-e] [-d] [-a] [-base64] [-A] [-k password] [-kfile filename] [-K key] [-iv IV] [-S salt] [-salt] [-nosalt] [-z] [-md digest] [-iter count] [-pbkdf2] [-saltlen size] [-p] [-P] [-bufsize number] [-nopad] [-v] [-debug] [-none] [-engine id] [-rand files] [-writerand file] [-provider name] [-provider-path path] [-propquery propq]
```
**DESCRIPTION**: The symmetric cipher commands allow data to be encrypted or decrypted using various block and stream ciphers using keys based on passwords or explicitly provided. Base64 encoding or decoding can also be performed either by itself or in addition to the encryption or decryption.\
**OPTIONS**:
-help: Print out a usage message.
- -list: List all supported ciphers.
- -ciphers: Alias of -list to display all supported ciphers.
- -in filename: The input filename, standard input by default.
- -out filename: The output filename, standard output by default.
- -pass arg: The password source. For more information about the format of arg see "Pass Phrase Options" in openssl(1).
- -e: Encrypt the input data: this is the default.
- -d: Decrypt the input data.
- -a: Base64 process the data. This means that if encryption is taking place the data is base64 encoded after encryption. If decryption is set then the input data is base64 decoded before being decrypted.
- -base64: Same as -a
- -A: If the -a option is set then base64 process the data on one line.
- -k password: The password to derive the key from. This is for compatibility with previous versions of OpenSSL. Superseded by the -pass argument.
- -kfile filename: Read the password to derive the key from the first line of filename. This is for compatibility with previous versions of OpenSSL. Superseded by the -pass argument.
- -md digest: Use the specified digest to create the key from the passphrase. The default algorithm is sha-256.
- -iter count: Use a given number of iterations on the password in deriving the encryption key. High values increase the time required to brute-force the resulting file. This option enables the use of PBKDF2 algorithm to derive the key.
- -pbkdf2: Use PBKDF2 algorithm with a default iteration count of 10000 unless otherwise specified by the -iter command line option.
- -saltlen: Set the salt length to use when using the -pbkdf2 option. For compatibility reasons, the default is 8 bytes. The maximum value is currently 16 bytes. If the -pbkdf2 option is not used, then this option is ignored and a fixed salt length of 8 is used. The salt length used when encrypting must also be used when decrypting.
- -nosalt: Don't use a salt in the key derivation routines. This option SHOULD NOT be used except for test purposes or compatibility with ancient versions of OpenSSL.
- -z: Compress or decompress encrypted data using zlib after encryption or before decryption. This option exists only if OpenSSL was compiled with the zlib or zlib-dynamic option.
- -none: Use NULL cipher (no encryption or decryption of input).
- -rand files, -writerand file: See "Random State Options" in openssl(1) for details.
- -provider name: -provider-path path: -propquery propq: See "Provider Options" in openssl(1), provider(7), and property(7).
- -engine id: See "Engine Options" in openssl(1). This option is deprecated.
- Supported ciphers:
  - aes-128-cbc
  - aes-128-cfb
  - aes-128-cfb1
  - aes-128-cfb8
  - aes-128-ctr
  - aes-128-ecb
  - aes-128-ofb
  - aes-192-cbc
  - aes-192-cfb
  - aes-192-cfb1
  - aes-192-cfb8
  - aes-192-ctr
  - aes-192-ecb
  - aes-192-ofb
  - aes-256-cbc
  - aes-256-cfb
  - aes-256-cfb1
  - aes-256-cfb8
  - aes-256-ctr
  - aes-256-ecb
  - aes-256-ofb
  - aes128
  - aes128-wrap
  - aes128-wrap-pad
  - aes192
  - aes192-wrap
  - aes192-wrap-pad
  - aes256
  - aes256-wrap
  - aes256-wrap-pad
  - aria-128-cbc
  - aria-128-cfb
  - aria-128-cfb1
  - aria-128-cfb8
  - aria-128-ctr
  - aria-128-ecb
  - aria-128-ofb
  - aria-192-cbc
  - aria-192-cfb
  - aria-192-cfb1
  - aria-192-cfb8
  - aria-192-ctr
  - aria-192-ecb
  - aria-192-ofb
  - aria-256-cbc
  - aria-256-cfb
  - aria-256-cfb1
  - aria-256-cfb8
  - aria-256-ctr
  - aria-256-ecb
  - aria-256-ofb
  - aria128
  - aria192
  - aria256
  - bf
  - bf-cbc
  - bf-cfb
  - bf-ecb
  - bf-ofb
  - blowfish
  - camellia-128-cbc
  - camellia-128-cfb
  - camellia-128-cfb1
  - camellia-128-cfb8
  - camellia-128-ctr
  - camellia-128-ecb
  - camellia-128-ofb
  - camellia-192-cbc
  - camellia-192-cfb
  - camellia-192-cfb1
  - camellia-192-cfb8
  - camellia-192-ctr
  - camellia-192-ecb
  - camellia-192-ofb
  - camellia-256-cbc
  - camellia-256-cfb
  - camellia-256-cfb1
  - camellia-256-cfb8
  - camellia-256-ctr
  - camellia-256-ecb
  - camellia-256-ofb
  - camellia128
  - camellia192
  - camellia256
  - cast
  - cast-cbc
  - cast5-cbc
  - cast5-cfb
  - cast5-ecb
  - cast5-ofb
  - chacha20
  - des
  - des-cbc
  - des-cfb
  - des-cfb1
  - des-cfb8
  - des-ecb
  - des-ede
  - des-ede-cbc
  - des-ede-cfb
  - des-ede-ecb
  - des-ede-ofb
  - des-ede3
  - des-ede3-cbc
  - des-ede3-cfb
  - des-ede3-cfb1
  - des-ede3-cfb8
  - des-ede3-ecb
  - des-ede3-ofb
  - des-ofb
  - des3
  - des3-wrap
  - desx
  - desx-cbc
  - id-aes128-wrap
  - id-aes128-wrap-pad
  - id-aes192-wrap
  - id-aes192-wrap-pad
  - id-aes256-wrap
  - id-aes256-wrap-pad
  - id-smime-alg-CMS3DESwrap
  - idea
  - idea-cbc
  - idea-cfb
  - idea-ecb
  - idea-ofb
  - rc2
  - rc2-128
  - rc2-40
  - rc2-40-cbc
  - rc2-64
  - rc2-64-cbc
  - rc2-cbc
  - rc2-cfb
  - rc2-ecb
  - rc2-ofb
  - rc4
  - rc4-40
  - seed
  - seed-cbc
  - seed-cfb
  - seed-ecb
  - seed-ofb
  - sm4
  - sm4-cbc
  - sm4-cfb
  - sm4-ctr
  - sm4-ecb
  - sm4-ofb
---
## File and Directory Management of Termux and Linux
### `cp` (Copy files and directories)
- **Examples**:
  - `cp -r dir1/ dir2/`: Recursively copy `dir1` to `dir2`.
  - `cp -i file1.txt file2.txt`: Prompt before overwriting `file2.txt`.
### `mv` (Move or rename files and directories)
- **Examples**:
  - `mv file1.txt /home/user/`: Move `file1.txt` to `/home/user/`.
  - `mv oldname.txt newname.txt`: Rename `oldname.txt` to `newname.txt`.
### `rm` (Remove files or directories)
- **Examples**:
  - `rm file1.txt`: Remove `file1.txt`.
  - `rm -r dir1/`: Recursively remove `dir1` and its contents.
  - `rm -rf dir1/`: Forcefully remove `dir1` and its contents without prompts.
### `mkdir` (Create directories)
- **Examples**:
  - `mkdir newdir`: Create a directory named `newdir`.
  - `mkdir -p parentdir/childdir`: Create `parentdir` and `childdir` if they don't exist.
### `ls` (List directory contents)
- **Examples**:
  - `ls -l`: List with detailed information (permissions, ownership, size).
  - `ls -a`: List all files, including hidden ones (starting with `.`).
  - `ls -lh`: List with human-readable file sizes.
### `rmdir` (Remove empty directories)
- **Syntax**: `rmdir [options] directory`
- **Examples**:
  - `rmdir emptydir`: Remove `emptydir` if it's empty.
  - `rmdir -p parentdir/childdir`: Remove `childdir` and `parentdir` if they are empty.
### `find` (Search for files and directories)
- **Syntax**: `find [path] [options] [expression]`
- **Examples**:
  - `find /home/user/ -name '*.txt'`: Find all `.txt` files under `/home/user/`.
  - `find . -type d -name 'dir*'`: Find directories starting with `dir`.
### `touch` (Create or update file timestamps)
- **Syntax**: `touch [options] file`
- **Examples**:
  - `touch newfile.txt`: Create an empty `newfile.txt` or update its timestamp.
  - `touch -c non_existent_file.txt`: Don’t create `non_existent_file.txt` if it doesn’t exist.
### `chmod` (Change File Permissions)
`chmod` can use both numeric (octal) and symbolic modes to set file permissions.
#### Numeric (Octal) Mode
- **Syntax**: `chmod [permissions] file`
- **Examples**:
  - `chmod 755 file.txt`: 
    - `7` (rwx) for owner
    - `5` (r-x) for group
    - `5` (r-x) for others
  - `chmod 644 file.txt`:
    - `6` (rw-) for owner
    - `4` (r--) for group
    - `4` (r--) for others
**Numeric Permission Values**:
- `4` = Read (r)
- `2` = Write (w)
- `1` = Execute (x)
- Permissions are additive. For example, `7` = `4` (r) + `2` (w) + `1` (x).
#### Symbolic Mode
- **Syntax**: `chmod [who][+/-][permissions] file`
- **Examples**:
  - `chmod u+x file.txt`: Add execute permission for the user (owner).
  - `chmod g-w file.txt`: Remove write permission for the group.
  - `chmod o=r file.txt`: Set others' permissions to read-only.
**Symbolic Permission Characters**:
- `u` = User (owner)
- `g` = Group
- `o` = Others
- `a` = All (user, group, and others)
- `+` = Add permission
- `-` = Remove permission
- `=` = Set exact permission
#### Options
- `-R` or `--recursive`: Apply changes recursively to directories and their contents.
### `chown` (Change File Ownership)
- **Syntax**: `chown [options] user[:group] file`
- **Examples**:
  - `chown user file.txt`: Change the owner to `user`.
  - `chown user:group file.txt`: Change the owner to `user` and the group to `group`.
  - `chown :group file.txt`: Change the group to `group` without changing the owner.
- Options
  - `-R` or `--recursive`: Apply changes recursively to directories and their contents.
### `df` (Disk Space Usage)
- **Syntax**: `df [options] [file]`
- **Examples**:
  - `df -h`: Display disk space in a human-readable format (e.g., MB, GB).
  - `df -T`: Show the filesystem type along with space usage.
  - `df --total`: Show a grand total of all file systems.
### `du` (Disk Usage)
- **Syntax**: `du [options] [file]`
- **Examples**:
  - `du -h`: Show disk usage in human-readable format.
  - `du -sh /path/to/dir`: Show the total size of `/path/to/dir`.
  - `du -a`: Show the size of all files and directories.
  - `du --max-depth=1`: Limit the depth of directory traversal to 1 level.
### pwd (Check Current Directory)
- **Syntax**: `pwd`
---
## OpenSSH with Linux or Termux and SFTP Server Mount on Material Files: Secure Remote Access
### Introduction of SSH and OpenSSH
SSH provides a secure way for accessing remote hosts and replaces tools such as telnet, rlogin, rsh, ftp. \
OpenSSH (also known as OpenBSD Secure Shell) is a suite of secure networking utilities based on the Secure Shell (SSH) protocol, which provides a secure channel over an unsecured network in a client–server architecture.\
Default SSH port in **Termux** is `8022`.\
Default SSH port in Linux is usually `22`.
### OpenSSH Server in Linux
#### Install and Setup
```
sudo apt install openssh-server
sudo systemctl enable --now ssh
```
#### Edit Configuration 
```
sudo nano /etc/ssh/sshd_config
```
Change the line:
```
#Port 22
```
to:
```
Port 2222
```
You can change the port `2222` to the port you want. Note that you may need to set the ports that VM can use when booting VM if you are in a VM.\
Change the line:
```
#PermitRootLogin prohibit-password
```
to:
```
PermitRootLogin yes
```
if you want to permit login as root.
#### Start 
```
sudo service ssh start
```
#### Restart  
```
sudo service ssh restart
```
#### Stop 
```
sudo service ssh stop
```
#### Disable 
```
sudo systemctl disable ssh
```
#### Enable 
```
sudo systemctl enable ssh
```
#### Check Status
```
sudo service ssh status
```
### OpenSSH Server in Termux 
#### Install
```
apt install openssh
```
#### Start
```
sshd
```
#### Stop
```
pkill sshd
```
---
### OpenSSH Client in Linux or Termux
#### Install in Linux
```
sudo apt install openssh-client
```
#### Install in Termux 
```
apt install openssh
```
#### Run
```
ssh root@localhost
```
Change the `root@localhost` to the actual user name and address. Port will be set as default.\
Run with port specified:
```
ssh root@localhost -p 2222
```
Change `2222` to the port of the server.
#### Exit
Type:
```
exit
```
to exit a SSH connection.
#### `kex_exchange_identification: read: Connection reset by peer` Error
To solve this error, try:
- `nano /etc/hosts .deny` and delete all lines in it.
- Run `ssh-keygen -R [localhost]:2222` on the client side. Change `[localhost]:2222` to the actual address and port of the server.
- Use `ssh -v root@localhost -p port`, `ssh -vv root@localhost -p port`, `ssh -vvv root@localhost -p port` to debug.
- Ensure that no firewall or VPN service is blocking or forwarding the connections.
- Ensure the configuration in `/etc/ssh/sshd_config` is correct.
- Ensure the authentication is correct.
- Restart SSH server.
- Check SSH log file.
- Reboot.
### SCP (Secure Copy Protocol)
You can use `scp` on the client side to transfer files between the server side and the client side.\
The syntax of `scp` is the same as that of `cp`, but with the `username@host:` added before the path to copy to or from the server. For example:
```
scp -r root@localhost:/root/Desktop /data/data/com.termux/files/home/
```
Use SFTP server mount if you encounter errors in this method.
### SFTP Server Mound on Material Files
#### Install Material Files
You can install **Material Files** from Google Play: [https://play.google.com/store/apps/details?id=me.zhanghai.android.files](https://play.google.com/store/apps/details?id=me.zhanghai.android.files) or F-Droid: [https://f-droid.org/packages/me.zhanghai.android.files/](https://f-droid.org/packages/me.zhanghai.android.files/).
#### Introduction of SFTP
SFTP, or Secure File Transfer Protocol, is a secure network protocol used for transferring files over a secure connection. It is an extension of the SSH (Secure Shell) protocol, which means it provides the same level of security and encryption that SSH offers. Here are some key points about SFTP:
1. Security: SFTP encrypts both commands and data. This makes it more secure than traditional FTP (File Transfer Protocol).
2. Authentication: SFTP supports various password-based and key-based authentication.
3. File Management: SFTP allows for various file management operations, such as listing files, changing directories, and deleting files.
4. Port: SFTP typically operates over the same port used by SSH.
5. Cross-Platform: SFTP is supported on various platforms, making it a versatile option for file transfers across different systems.
#### Mount SFTP Server
- Connect to the SSH server with **Termux** or other clients on your Android device.
- Open the left menu.
- Tap **Add storage ...**.
- Tap **SFTP server**.
- Input necessary information. Hostname, Port, etc. means those of the SSH server. Leave path empty to mount the whole file system of the server side.
- You can manage the file system of the SSH server like managing local storage now.
### Further Readings and References about OpenSSH with Linux and Termux
- [https://www.openssh.com/](https://www.openssh.com/)
- [https://ivonblog.com/posts/termux-qemu-system-linux/](https://ivonblog.com/posts/termux-qemu-system-linux/)
- [https://wiki.termux.com/wiki/Remote_Access](https://wiki.termux.com/wiki/Remote_Access).
- [https://ivonblog.com/posts/termux-openssh/](https://ivonblog.com/posts/termux-openssh/).
---
## Linux Command Library
### Introduction of Linux Command Library
The app has 6056 manual pages, 22+ basic categories and a bunch of general terminal tips about Linux (retrieved Sep. 27, 2024). It works 100% offline, doesn't need an internet connection and has no tracking software. Some of the commands available in Linux are available in **Termux** too, such as `cp`, `mv`, `ls`, `mkdir`, `apt`, and `apt-get`.
### Install and Use Linux Command Library 
You can install **Linux Command Library** in Google Play: [https://play.google.com/store/apps/details?id=com.inspiredandroid.linuxcommandbibliotheca](https://play.google.com/store/apps/details?id=com.inspiredandroid.linuxcommandbibliotheca) or F-Droid: [https://f-droid.org/packages/com.inspiredandroid.linuxcommandbibliotheca/](https://f-droid.org/packages/com.inspiredandroid.linuxcommandbibliotheca/), or browse it on its official website: [https://linuxcommandlibrary.com/](https://linuxcommandlibrary.com/).
---
## Linux and Termux Odds and Ends
### apt (Termux, Debian, etc.)
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
### SIGINT: Send Signal Interrupt from Keyboard (Termux, Debian, etc.)
Press Ctrl + C to send a signal called SIGINT (Signal Interrupt) to the currently running process. This signal instructs the process to stop execution. It is typically used to terminate a running program or command, especially one that is taking too long or has become unresponsive.
### Commands for Copy
#### Linux Setup Command
```
sudo apt update && sudo apt upgrade
sudo apt install xfce4 xfce4-goodies python3-all-dev python3-venv build-essential cmake curl wget git gh openjdk-17-jdk nano vim iproute2 procps grep libboost-all-dev gdb tmux openssl libssl-dev openssh-server
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 -m venv myenv
source myenv/bin/activate
python3 get-pip.py
pip3 install numpy pandas sympy matplotlib numba nuitka setuptools selenium conan jupyter pybind11 pyinstaller
```
#### Termux Package Management Command (All)
```
apt update && apt upgrade && apt --fix-broken install && apt autoremove --purge && apt clean && pkg update && pkg upgrade && pkg clean
```
#### Termux Package Management Command (All apt)
```
apt update && apt upgrade && apt --fix-broken install && apt autoremove --purge && apt clean
```
#### Termux Package Management Command (All pkg)
```
pkg update && pkg upgrade && pkg clean
```
#### Termux Package Management Command (Update and Upgrade All)
```
apt update && apt upgrade && pkg update && pkg upgrade
```
#### Termux Package Management Command (Update and Upgrade apt)
```
apt update && apt upgrade
```
#### Termux Package Management Command (Update and Upgrade pkg)
```
pkg update && pkg upgrade
```
#### Termux Package Management Command (Update All)
```
apt update && pkg update
```
#### Termux Package Management Command (Update apt)
```
apt update
```
#### Termux Package Management Command (Update pkg)
```
pkg update
```
#### Linux Package Management Command (All apt)
```
sudo apt update && sudo apt upgrade && sudo apt --fix-broken install && sudo apt autoremove --purge && sudo apt clean
```
#### Linux Package Management Command (Update and Upgrade apt)
```
sudo apt update && sudo apt upgrade
```
#### Linux Package Management Command (Update apt)
```
sudo apt update
```
---
## Promoted or Related Works, References, and Bibliography 
### Termux by Fredrik Fornwall / Termux / termux
- F-Droid: [https://f-droid.org/packages/com.termux/](https://f-droid.org/packages/com.termux/).
- GitHub of termux-app: [https://github.com/termux/termux-app](https://github.com/termux/termux-app).
- GitHub of x11-packages: [https://github.com/termux/x11-packages](https://github.com/termux/x11-packages).
- Official wiki: [https://wiki.termux.com/](https://wiki.termux.com/).
- Official Reddit community: [https://termux.com/community](https://termux.com/community).
- Google Play: [https://play.google.com/store/apps/details?id=com.termux](https://play.google.com/store/apps/details?id=com.termux).
### Andronix by Devriz Technologies LLP / Andronix App /AndronixApp
- Google Play: [https://play.google.com/store/apps/details?id=studio.com.techriz.andronix](https://play.google.com/store/apps/details?id=studio.com.techriz.andronix).
- GitHub: [https://github.com/AndronixApp/AndronixOrigin](https://github.com/AndronixApp/AndronixOrigin).
- Official website: [https://docs.andronix.app/](https://docs.andronix.app/).
### Shizuku by Xingchen & Rikka / RikkaApps
- Official website: [https://shizuku.rikka.app/guide/setup/?night=1](https://shizuku.rikka.app/guide/setup/?night=1).
- Google Play: [https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api). 
- GitHub: [https://github.com/RikkaApps/Shizuku](https://github.com/RikkaApps/Shizuku).
### SystemUI Tuner by Zachary Wander / zacharee
- Google Play: [https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner](https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner). 
- GitHub: [https://github.com/zacharee/Tweaker](https://github.com/zacharee/Tweaker).
### Invizible Pro by Garmatin Oleksandr / Oleksandr Garmatin / Gedsh
- Official website: [https://invizible.net/en/](https://invizible.net/en/).
- F-Droid: [https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/](https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/). 
- Google Play: [https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp](https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp). 
- GitHub: [https://github.com/Gedsh/InviZible](https://github.com/Gedsh/InviZible).
### TrackerControl / TC by TrackerControl / Oxford HCC
- F-Droid: [https://f-droid.org/packages/net.kollnig.missioncontrol.fdroid/](https://f-droid.org/packages/net.kollnig.missioncontrol.fdroid/). 
- GitHub: [https://github.com/TrackerControl/tracker-control-android](https://github.com/TrackerControl/tracker-control-android).
- Official website: [https://trackercontrol.org/](https://trackercontrol.org/).
- Google Play: [https://play.google.com/store/apps/details?id=net.kollnig.missioncontrol.play](https://play.google.com/store/apps/details?id=net.kollnig.missioncontrol.play).
### NetGuard by Marcel Bokhorst / M66B / Marcel Bokhorst, FairCode BV
- Google Play: [https://play.google.com/store/apps/details?id=eu.faircode.netguard](https://play.google.com/store/apps/details?id=eu.faircode.netguard). 
- F-Droid: [https://f-droid.org/packages/eu.faircode.netguard/](https://f-droid.org/packages/eu.faircode.netguard/). 
- GitHub: [https://github.com/M66B/NetGuard](https://github.com/M66B/NetGuard).
- Official website of NetGuard: [https://netguard.me/](https://netguard.me/).
- Official website of FairCode: [https://www.faircode.eu/](https://www.faircode.eu/).
### DontKillMyApp / DontKillMyApp: Make apps work by Urbandroid Team / urbandroid-team / Petr Nálevka (Urbandroid)
- Official website: [https://dontkillmyapp.com/](https://dontkillmyapp.com/).
- Google Play: [https://play.google.com/store/apps/details?id=com.urbandroid.dontkillmyapp](https://play.google.com/store/apps/details?id=com.urbandroid.dontkillmyapp).
- F-Droid: [https://f-droid.org/packages/com.urbandroid.dontkillmyapp/](https://f-droid.org/packages/com.urbandroid.dontkillmyapp/).
- GitHub: [https://github.com/urbandroid-team/dontkillmy-app](https://github.com/urbandroid-team/dontkillmy-app).
### aShell by Sunil Paul Mathew M. / sunilpaulmathew
- F-droid: [https://f-droid.org/packages/in.sunilpaulmathew.ashell/](https://f-droid.org/packages/in.sunilpaulmathew.ashell/).
- GitLab: [https://gitlab.com/sunilpaulmathew/ashell](https://f-droid.org/packages/in.sunilpaulmathew.ashell/).
### QEMU by Qemu Project / QEMU
- GitLab: [https://gitlab.com/qemu-project/qemu](https://gitlab.com/qemu-project/qemu).
- Official website: [https://www.qemu.org/](https://www.qemu.org/).
### Tor and Tor Browser by The Tor Project 
- Google Play of Tor Browser: [https://play.google.com/store/apps/details?id=org.torproject.torbrowser](https://play.google.com/store/apps/details?id=org.torproject.torbrowser).
- GitLab of Tor Browser: [https://gitlab.torproject.org/tpo/applications/tor-browser](https://gitlab.torproject.org/tpo/applications/tor-browser).
- GitLab of The Tor Project: [https://gitlab.torproject.org/tpo](https://gitlab.torproject.org/tpo).
- GitLab of the Debian package tor:[https://gitlab.torproject.org/tpo/core/debian/tor](https://gitlab.torproject.org/tpo/core/debian/tor).
- Official website: [https://www.torproject.org/](https://www.torproject.org/).
- Check Tor Project: [https://check.torproject.org/](https://check.torproject.org/).
### MyIP/IPCheck.ing by Jason Ng / jason5ng32
- Official website: [https://ipcheck.ing/](https://ipcheck.ing/).
- GitHub: [https://github.com/jason5ng32/MyIP](https://github.com/jason5ng32/MyIP).
### Debian
- Official website: [https://www.debian.org/](https://www.debian.org/).
- GitLab: [https://salsa.debian.org/public](https://salsa.debian.org/public).
### Linux Command Library by Simon Schubert / SimonSchubert
- GitHub: [https://github.com/SimonSchubert/LinuxCommandLibrary](https://github.com/SimonSchubert/LinuxCommandLibrary).
- Google Play: [https://play.google.com/store/apps/details?id=com.inspiredandroid.linuxcommandbibliotheca](https://play.google.com/store/apps/details?id=com.inspiredandroid.linuxcommandbibliotheca). 
- F-Droid: [https://f-droid.org/packages/com.inspiredandroid.linuxcommandbibliotheca/](https://f-droid.org/packages/com.inspiredandroid.linuxcommandbibliotheca/). 
- Official website: [https://linuxcommandlibrary.com/](https://linuxcommandlibrary.com/).
### OpenSSL by OpenSSL / openssl
- Official website: [https://www.openssl.org/](https://www.openssl.org/).
- GitHub: [https://github.com/openssl/openssl](https://github.com/openssl/openssl).
### ANC by Gaurav Ujwal / gujjwal00
- F-Droid: [https://f-droid.org/packages/com.gaurav.avnc/](https://f-droid.org/packages/com.gaurav.avnc/).
- GitHub: [https://github.com/gujjwal00/avnc](https://github.com/gujjwal00/avnc).
### Material Files / MaterialFiles by Hai Zhang / zhanghai
- Google Play: [https://play.google.com/store/apps/details?id=me.zhanghai.android.files](https://play.google.com/store/apps/details?id=me.zhanghai.android.files).
- F-Droid: [https://f-droid.org/packages/me.zhanghai.android.files/](https://f-droid.org/packages/me.zhanghai.android.files/).
- GitHub: [https://github.com/zhanghai/MaterialFiles](https://github.com/zhanghai/MaterialFiles).
### Others
- ChatGPT by OpenAI: [https://openai.com/chatgpt/](https://openai.com/chatgpt/).
- awesome-shizuku by Tim Schneeberger / timschneeb: [https://github.com/timschneeb/awesome-shizuku](https://github.com/timschneeb/awesome-shizuku).
- shizuku-apps by Souvik Bagchi (Mr HyperIon) / MrHyperlon101: [https://github.com/MrHyperIon101/shizuku-apps](https://github.com/MrHyperIon101/shizuku-apps).
- Wikipedia: [https://en.m.wikipedia.org/](https://en.m.wikipedia.org/).
- DNS leak test: [https://www.dnsleaktest.com](https://www.dnsleaktest.com).
- What Is My IP Address: [https://whatismyipaddress.com](https://whatismyipaddress.com).
---
## Contribution
We welcome contributions to this project! Please fork the repository and submit a pull request for your contributions. For clarity and convenience, we recommend making one pull request per revised section or added feature.
---
## License
This project is licensed under the terms the GNU General Public License v3.0 or later (GPL-3.0-or-later).\
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.\
You should have received a copy of the GNU General Public License along with this program.  If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).\
By contributing to this project, you agree that your contributions will be licensed under GPL-3.0-or-later.