<a href="https://willie169.github.io"><img src="img/willie169.jpeg" alt="Willie169" style="height: 40px;"></a>
<a href="https://willie169.github.io/Android-Non-Root"><img src="img/Android_Non_Root.png" alt="Android Non Root" style="height: 40px;"></a>

# Android Non Root

**Android Non Root** has three versions:

* **The HTML version**: <https://willie169.github.io/Android-Non-Root>.
* **The Markdown version**: <https://github.com/Willie169/Android-Non-Root>.
* **The app version**: <https://github.com/Willie169/Android-Non-Root-App>.
* **App download link**: <https://github.com/Willie169/Android-Non-Root-App/releases/download/v1.0/com.willie.androidnonroot%5F10.apk>.

In this tutorial, we’ll explore a range of powerful, open-source tools such as [Termux](https://github.com/termux/termux-app), [F-Droid](https://f-droid.org), [Shizuku](https://github.com/RikkaApps/Shizuku), [Tor](https://www.torproject.org), [TrackerControl](https://github.com/TrackerControl/tracker-control-android), [InviZible Pro](https://github.com/Gedsh/InviZible), [QEMU](https://www.qemu.org), [Tailscale](https://github.com/tailscale/tailscale), [OpenSSH](https://www.openssh.com), and [PipePipe](https://github.com/InfinityLoop1308/PipePipe) to enhance your Android device’s functionality, security, privacy, and customization without the need for root access.

Please read the [Global Note](#global-note) before you start or you may encounter errors.

My main development of Termux Shell scripts has been moved to my another repository, [**termux-sh**](https://github.com/Willie169/termux-sh), which includes setup automation, shortcuts, installations and configurations of development tools and emulation environments such as proot, proot-distro, QEMU system emulation, and box64, and more, while tutorials for Termux, some of my scripts in [**termux-sh**](https://github.com/Willie169/termux-sh), and other related stuff remain here.

---

## Table of Contents

* [Table of Contents](#table-of-contents)
* [Author Information](#author-information)
* [Global Note](#global-note)
* [F-Droid: Free Software Android Apps Repository and App Store](#f-droid-free-software-android-apps-repository-and-app-store)
  * [Install F-Droid](#install-f-droid)
  * [Introduction of F-Droid](#introduction-of-f-droid)
  * [F-Droid Repositories](#f-droid-repositories)
* [Termux: A Powerful Terminal Emulation with an Extensive Linux Package Collection](#termux-a-powerful-terminal-emulation-with-an-extensive-linux-package-collection)
  * [Install Termux](#install-termux)
  * [Short Introduction of Termux](#short-introduction-of-termux)
  * [Termux App User Interface](#termux-app-user-interface)
  * [Shortcuts in Termux](#shortcuts-in-termux)
  * [Types of Storage in Termux](#types-of-storage-in-termux)
  * [Storage Related Utilities in Termux](#storage-related-utilities-in-termux)
  * [Shell in Termux](#shell-in-termux)
  * [Termux Chroot](#termux-chroot)
  * [Termux Fix Shebang](#termux-fix-shebang)
  * [Environment Variables in Termux](#environment-variables-in-termux)
  * [Difference Between Linux and Termux](#difference-between-linux-and-termux)
  * [Termux-Properties](#termux-properties)
  * [Termux PKG Package Manager](#termux-pkg-package-manager)
  * [Debian Derivatives and Termux APT Package Manager](#debian-derivatives-and-termux-apt-package-manager)
  * [Termux Change Repo](#termux-change-repo)
  * [Package Command Error](#package-command-error)
  * [Process completed (signal 9) - press Enter Error](#process-completed-signal-9---press-enter-error)
* [POSIX References](#posix-references)
  * [Shell Reference](#shell-reference)
* [Termux:Styling, Termux:Widget, Termux:Boot, Termux:Float, and Termux:API](#termuxstyling-termuxwidget-termuxboot-termuxfloat-and-termuxapi)
  * [Termux:Styling](#termuxstyling)
  * [Termux:Widget](#termuxwidget)
  * [Termux:Boot](#termuxboot)
  * [Termux:Float](#termuxfloat)
  * [Termux:API](#termuxapi)
* [TigerVNC, Termux-x11, Fluxbox, Openbox, XFCE, LXQt, and MATE: Termux VNC or X Server and Graphical Environment](#tigervnc-termux-x11-fluxbox-openbox-xfce-lxqt-and-mate-termux-vnc-or-x-server-and-graphical-environment)
  * [Introduction of VNC (Virtual Network Computing)](#introduction-of-vnc-virtual-network-computing)
  * [Introduction of X Window System (X11, or X)](#introduction-of-x-window-system-x11-or-x)
  * [Termux X11 Repository](#termux-x11-repository)
  * [TigerVNC VNC Server in Termux](#tigervnc-vnc-server-in-termux)
  * [Termux-x11](#termux-x11)
  * [Fluxbox in Termux](#fluxbox-in-termux)
  * [Openbox in Termux](#openbox-in-termux)
  * [XFCE in Termux](#xfce-in-termux)
  * [LXQt in Termux](#lxqt-in-termux)
  * [MATE in Termux](#mate-in-termux)
  * [Further Readings and References about Termux VNC or X Server and Graphical Environment](#further-readings-and-references-about-termux-vnc-or-x-server-and-graphical-environment)
* [AVNC: A VNC Client for Android](#avnc-a-vnc-client-for-android)
  * [Install AVNC](#install-avnc)
  * [Connect a VNC Server](#connect-a-vnc-server)
  * [Introduction of AVNC](#introduction-of-avnc)
* [Tailscale: Peer-to-Peer Mesh VPN](#tailscale-peer-to-peer-mesh-vpn)
  * [Introduction of Tailscale](#introduction-of-tailscale)
  * [Tailscale in Linux](#tailscale-in-linux)
  * [Tailscale in Android](#tailscale-in-android)
* [PRoot-Distro with Termux: Install Linux Distributions in Termux](#proot-distro-with-termux-install-linux-distributions-in-termux)
  * [Introduction of Chroot, PRoot, PRoot-Distro](#introduction-of-chroot-proot-proot-distro)
  * [PRoot-Distro Usage](#proot-distro-usage)
  * [Supported Distributions](#supported-distributions)
  * [Hint to Install Linux OS with PRoot-Distro](#hint-to-install-linux-os-with-proot-distro)
* [Andronix with Termux: Install Linux Distributions in Termux](#andronix-with-termux-install-linux-distributions-in-termux)
  * [Install Andronix App (Optional)](#install-andronix-app-optional)
  * [Install an OS Following Andronix App Instructions](#install-an-os-following-andronix-app-instructions)
  * [Uninstall an Not Modded OS Following Andronix App Instructions](#uninstall-an-not-modded-os-following-andronix-app-instructions)
  * [PulseAudio Server Sound Output](#pulseaudio-server-sound-output)
  * [Example: Debian with XFCE Desktop Environment](#example-debian-with-xfce-desktop-environment)
  * [Example: Debian with CLI Only](#example-debian-with-cli-only)
  * [Example: Uninstall Debian OS (Not Modded)](#example-uninstall-debian-os-not-modded)
  * [Further Readings and References about Chroot, Proot, and Andronix](#further-readings-and-references-about-chroot-proot-and-andronix)
* [QEMU System Emulation with Termux: Full System Emulation](#qemu-system-emulation-with-termux-full-system-emulation)
  * [Install QEMU System Emulation for x86-64](#install-qemu-system-emulation-for-x86-64)
  * [Install QEMU System Emulation for AArch64](#install-qemu-system-emulation-for-aarch64)
  * [ISO and QCOW2 Image Methods](#iso-and-qcow2-image-methods)
  * [Host Port Forwarding](#host-port-forwarding)
  * [Alpine Linux x86-64 ISO Image](#alpine-linux-x86-64-iso-image)
  * [Alpine Linux AArch64 ISO Image](#alpine-linux-aarch64-iso-image)
  * [Debian Linux AMD64 QCOW2 Image](#debian-linux-amd64-qcow2-image)
  * [Debian Linux ARM64 QCOW2 Image](#debian-linux-arm64-qcow2-image)
  * [Check Image Info](#check-image-info)
  * [Check VM Disk](#check-vm-disk)
  * [Resize Image](#resize-image)
  * [Resize Partition in Debian AMD64](#resize-partition-in-debian-amd64)
  * [Resize Partition in Debian ARM64](#resize-partition-in-debian-arm64)
  * [Further Readings and References about QEMU](#further-readings-and-references-about-qemu)
* [Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell](#shizuku-systemui-tuner-and-ashell-use-local-adb-of-android-device-on-terminals-such-as-termux-without-another-device-with-shizuku-leave-developer-options-off-when-doing-so-with-systemui-tuner-and-use-adb-with-features-like-autocomplete-suggestion-with-ashell)
  * [Install Shizuku](#install-shizuku)
  * [Introduction of ADB and Shizuku](#introduction-of-adb-and-shizuku)
  * [Connect Shizuku to Wireless ADB](#connect-shizuku-to-wireless-adb)
  * [Use Shizuku in a Terminal Application for the First Time](#use-shizuku-in-a-terminal-application-for-the-first-time)
  * [Install SystemUI Tuner](#install-systemui-tuner)
  * [To Leave Developer Options off When Using Shizuku to Connect to ADB with SystemUI Tuner](#to-leave-developer-options-off-when-using-shizuku-to-connect-to-adb-with-systemui-tuner)
  * [Reconnect Shizuku in Case it Stops with SystemUI Tuner](#reconnect-shizuku-in-case-it-stops-with-systemui-tuner)
  * [Other SystemUI Tuner Usage](#other-systemui-tuner-usage)
  * [aShell](#ashell)
  * [Further Readings and References about ADB and Shizuku](#further-readings-and-references-about-adb-and-shizuku)
* [Tor, Tor Browser, NoScript Security Suite, and Torsocks](#tor-tor-browser-noscript-security-suite-and-torsocks)
  * [Introduction of Tor](#introduction-of-tor)
  * [Install Tor Browser](#install-tor-browser)
  * [NoScript Security Suite](#noscript-security-suite)
  * [Tor in Termux](#tor-in-termux)
  * [Torsocks in Termux](#torsocks-in-termux)
* [TrackerControl and InviZible Pro: Route Traffic through Tor, Block DNS over UDP, Set DNS Server, Block Trackers, etc.](#trackercontrol-and-invizible-pro-route-traffic-through-tor-block-dns-over-udp-set-dns-server-block-trackers-etc)
  * [Install InviZible Pro](#install-invizible-pro)
  * [Install TrackerControl](#install-trackercontrol)
  * [Configure TrackerControl to Block Trackers without InviZible Pro](#configure-trackercontrol-to-block-trackers-without-invizible-pro)
  * [Configure TrackerControl and InviZible Pro for DNSCrypt and Tor](#configure-trackercontrol-and-invizible-pro-for-dnscrypt-and-tor)
  * [Configure TrackerControl and InviZible Pro for DNSCrypt Only](#configure-trackercontrol-and-invizible-pro-for-dnscrypt-only)
  * [Configure TrackerControl and InviZible Pro for Tor Only](#configure-trackercontrol-and-invizible-pro-for-tor-only)
  * [Check Whether the Tor Route Setup Is Successful](#check-whether-the-tor-route-setup-is-successful)
  * [Configure InviZible Pro to Block Trackers without TrackerControl](#configure-invizible-pro-to-block-trackers-without-trackercontrol)
* [OpenSSH: Secure Remote Access with SSH, SCP, and SFTP](#openssh-secure-remote-access-with-ssh-scp-and-sftp)
  * [Introduction of SSH (Secure Shell) and OpenSSH](#introduction-of-ssh-secure-shell-and-openssh)
  * [OpenSSH Server](#openssh-server)
  * [OpenSSH Client](#openssh-client)
  * [SCP (Secure Copy Protocol)](#scp-secure-copy-protocol)
  * [SFTP (Secure File Transfer Protocol)](#sftp-secure-file-transfer-protocol)
  * [Further Readings and References about OpenSSH with Linux and Termux](#further-readings-and-references-about-openssh-with-linux-and-termux)
* [OpenSSL: SSL and TLS Protocals and Cryptography Library Implementation](#openssl-ssl-and-tls-protocals-and-cryptography-library-implementation)
  * [Introduction of OpenSSL](#introduction-of-openssl)
  * [Install OpenSSL in Termux](#install-openssl-in-termux)
  * [Install of OpenSSL in Debian Derivatives](#install-of-openssl-in-debian-derivatives)
  * [RSA (Rivest-Shamir-Adleman)](#rsa-rivest-shamir-adleman)
  * [Symmetric Encryption](#symmetric-encryption)
* [droidVNC-NG: VNC Server App for Android That Does Not Require Root Privileges](#droidvnc-ng-vnc-server-app-for-android-that-does-not-require-root-privileges)
  * [Install droidVNC-NG](#install-droidvnc-ng)
  * [Introduction of droidVNC-NG](#introduction-of-droidvnc-ng)
* [SD Maid SE: A File Management Tool and System Cleaner](#sd-maid-se-a-file-management-tool-and-system-cleaner)
  * [Install SD Maid SE](#install-sd-maid-se)
  * [Introduction of SD Maid SE](#introduction-of-sd-maid-se)
  * [Use SD Maid SE with Shizuku](#use-sd-maid-se-with-shizuku)
* [Phyphox: Perform Physics Experiments with Your Phone](#phyphox-perform-physics-experiments-with-your-phone)
  * [Install Phyphox](#install-phyphox)
  * [Introduction of Phyphox](#introduction-of-phyphox)
* [AndroidIDE: IDE for Android App development on Android devices](#androidide-ide-for-android-app-development-on-android-devices)
  * [Install AndroidIDE](#install-androidide)
  * [Introduction of AndroidIDE](#introduction-of-androidide)
* [Linux Command Library](#linux-command-library)
  * [Install Linux Command Library (Optional)](#install-linux-command-library-optional)
  * [Introduction of Linux Command Library](#introduction-of-linux-command-library)
  * [Website Version of Linux Command Library](#website-version-of-linux-command-library)
* [Material File: Linux-Aware File Manager with FTP, SFTP, SMB and WebDAV Support](#material-file-linux-aware-file-manager-with-ftp-sftp-smb-and-webdav-support)
  * [Install Material Files](#install-material-files)
  * [Introduction of Material Files](#introduction-of-material-files)
  * [Mount External Storage or NAS (Network-Attached Storage) Server](#mount-external-storage-or-nas-network-attached-storage-server)
* [PipePipe: A FLOSS Android App to Let You Browse YouTube, NicoNico and BiliBili Freely.](#pipepipe-a-floss-android-app-to-let-you-browse-youtube-niconico-and-bilibili-freely)
  * [Install PipePipe](#install-pipepipe)
  * [Introduction of PipePipe](#introduction-of-pipepipe)
* [Xtra: Twitch Player and Browser](#xtra-twitch-player-and-browser)
  * [Install Xtra](#install-xtra)
  * [Introduction of Xtra](#introduction-of-xtra)
* [Material Photo Widget](#material-photo-widget)
  * [Install Material Photo Widget](#install-material-photo-widget)
  * [Introduction of Material Photo Widget](#introduction-of-material-photo-widget)
* [LibreOffice Viewer: Viewer for Open Document Formats and Microsoft Office Formats](#libreoffice-viewer-viewer-for-open-document-formats-and-microsoft-office-formats)
  * [Introduction of LibreOffice](#introduction-of-libreoffice)
  * [Introduction of LibreOffice Viewer](#introduction-of-libreoffice-viewer)
* [VLC for Android: Open Source Media Player and Multimedia Engine](#vlc-for-android-open-source-media-player-and-multimedia-engine)
  * [Install VLC for Android](#install-vlc-for-android)
  * [Introduction of VLC](#introduction-of-vlc)
* [Firefox: Fast and Private Browser](#firefox-fast-and-private-browser)
  * [Install Firefox](#install-firefox)
  * [Introduction of Firefox](#introduction-of-firefox)
* [DuckDuckGo: Privacy Browser](#duckduckgo-privacy-browser)
  * [Install DuckDuckGo](#install-duckduckgo)
  * [Introduction of DuckDuckGo](#introduction-of-duckduckgo)
* [Brave: Privacy Browser](#brave-privacy-browser)
  * [Install Brave](#install-brave)
  * [Introduction of Brave](#introduction-of-brave)
* [Safe Space: A Safe Space For Your Digital Valuables](#safe-space-a-safe-space-for-your-digital-valuables)
  * [Install Safe Space](#install-safe-space)
  * [Introduction of Safe Space](#introduction-of-safe-space)
* [SimplyTranslate Mobile: A Privacy Friendly Frontend to Google Translate](#simplytranslate-mobile-a-privacy-friendly-frontend-to-google-translate)
  * [Install SimplyTranslate Mobile](#install-simplytranslate-mobile)
  * [Introduction of SimplyTranslate Mobile](#introduction-of-simplytranslate-mobile)
  * [Website Version of SimplyTranslate Mobile](#website-version-of-simplytranslate-mobile)
* [LibreTorrent](#libretorrent)
  * [Install LibreTorrent](#install-libretorrent)
  * [Introduction of BitTorrent](#introduction-of-bittorrent)
  * [Introduction of LibreTorrent](#introduction-of-libretorrent)
* [Thunderbird: Privacy-Focused Email App](#thunderbird-privacy-focused-email-app)
  * [Install Thunderbird](#install-thunderbird)
  * [Introduction of Thunderbird](#introduction-of-thunderbird)
* [Promoted or Related Works, References, and Bibliography](#promoted-or-related-works-references-and-bibliography)
  * [ANC by Gaurav Ujwal / gujjwal00](#anc-by-gaurav-ujwal--gujjwal00)
  * [AndroidIDE by AndroidIDE / AndroidIDEOfficial](#androidide-by-androidide--androidideofficial)
  * [Andronix by Devriz Technologies LLP / Andronix App /AndronixApp](#andronix-by-devriz-technologies-llp--andronix-app-andronixapp)
  * [aShell by Sunil Paul Mathew M. / sunilpaulmathew](#ashell-by-sunil-paul-mathew-m--sunilpaulmathew)
  * [Brave / Brave Browser by Brave Software / brave](#brave--brave-browser-by-brave-software--brave)
  * [Debian by the Debian Project](#debian-by-the-debian-project)
  * [DontKillMyApp / DontKillMyApp: Make apps work by Urbandroid Team / urbandroid-team / Petr Nálevka (Urbandroid)](#dontkillmyapp--dontkillmyapp-make-apps-work-by-urbandroid-team--urbandroid-team--petr-nalevka-urbandroid)
  * [droidVNC-NG / droidVNC-NG VNC Server by Christian Beier / bk138](#droidvnc-ng--droidvnc-ng-vnc-server-by-christian-beier--bk138)
  * [DuckDuckGo / DuckDuckGo Browser / DuckDuckGo Privacy Browser / DuckDuckGo Private Browser by DuckDuckGo or duckduckgo](#duckduckgo--duckduckgo-browser--duckduckgo-privacy-browser--duckduckgo-private-browser-by-duckduckgo-or-duckduckgo)
  * [F-Droid by F-Droid](#f-droid-by-f-droid)
  * [Firefox / Firefox Fast & Private Browser by Mozilla](#firefox--firefox-fast--private-browser-by-mozilla)
  * [GNU](#gnu)
  * [Invizible Pro by Garmatin Oleksandr / Oleksandr Garmatin / Gedsh](#invizible-pro-by-garmatin-oleksandr--oleksandr-garmatin--gedsh)
  * [IzzyOnDroid by IzzyOnDroid](#izzyondroid-by-izzyondroid)
  * [LibreOffice and LibreOffice Viewer by The Document Foundation](#libreoffice-and-libreoffice-viewer-by-the-document-foundation)
  * [LibreTorrent by Yaroslav Pronin / proninyaroslav](#libretorrent-by-yaroslav-pronin--proninyaroslav)
  * [Linux Command Library by Simon Schubert / SimonSchubert](#linux-command-library-by-simon-schubert--simonschubert)
  * [Material Files / MaterialFiles by Hai Zhang / zhanghai](#material-files--materialfiles-by-hai-zhang--zhanghai)
  * [MyIP / IPCheck.ing by Jason Ng / jason5ng32](#myip--ipchecking-by-jason-ng--jason5ng32)
  * [NetGuard by Marcel Bokhorst / M66B / Marcel Bokhorst, FairCode BV](#netguard-by-marcel-bokhorst--m66b--marcel-bokhorst-faircode-bv)
  * [NewPipe by Team NewPipe / TeamNewPipe](#newpipe-by-team-newpipe--teamnewpipe)
  * [OpenSSH by OpenSSH / openssh](#openssh-by-openssh--openssh)
  * [OpenSSL by OpenSSL / openssl](#openssl-by-openssl--openssl)
  * [Phyphox by RWTH Aachen University / phyphox](#phyphox-by-rwth-aachen-university--phyphox)
  * [PipePipe by InfinityLoop1309 / InfinityLoop1308](#pipepipe-by-infinityloop1309--infinityloop1308)
  * [QEMU by Qemu Project / QEMU](#qemu-by-qemu-project--qemu)
  * [Safe Space by aashishksahu](#safe-space-by-aashishksahu)
  * [SD Maid SE / SD Maid 2/SE - System Cleaner / sdmaid-se by d4rken / d4rken-org / darken / darken development](#sd-maid-se--sd-maid-2se---system-cleaner--sdmaid-se-by-d4rken--d4rken-org--darken--darken-development)
  * [Shizuku by Xingchen & Rikka / RikkaApps](#shizuku-by-xingchen--rikka--rikkaapps)
  * [SimplyTranslate Mobile by ManeraKai](#simplytranslate-mobile-by-manerakai)
  * [SystemUI Tuner by Zachary Wander / zacharee](#systemui-tuner-by-zachary-wander--zacharee)
  * [Tailscale by Tailscale / tailscale](#tailscale-by-tailscale--tailscale)
  * [Termux by Fredrik Fornwall / Termux / termux](#termux-by-fredrik-fornwall--termux--termux)
  * [Termux:API by Fredrik Fornwall / Termux / termux](#termuxapi-by-fredrik-fornwall--termux--termux)
  * [Termux:Boot by Fredrik Fornwall / Termux / termux](#termuxboot-by-fredrik-fornwall--termux--termux)
  * [Termux:Float by Fredrik Fornwall / Termux / termux](#termuxfloat-by-fredrik-fornwall--termux--termux)
  * [Termux:Styling by Fredrik Fornwall / Termux / termux](#termuxstyling-by-fredrik-fornwall--termux--termux)
  * [Termux:Widget by Fredrik Fornwall / Termux / termux](#termuxwidget-by-fredrik-fornwall--termux--termux)
  * [Termux-x11 by Fredrik Fornwall / Termux / termux](#termux-x11-by-fredrik-fornwall--termux--termux)
  * [TigerVNC or tigervnc by TigerVNC](#tigervnc-or-tigervnc-by-tigervnc)
  * [Thunderbird or Thunderbird: Free Your Inbox by Mozilla Thunderbird / thunderbird / Mozilla](#thunderbird-or-thunderbird-free-your-inbox-by-mozilla-thunderbird--thunderbird--mozilla)
  * [Tor and Tor Browser by The Tor Project](#tor-and-tor-browser-by-the-tor-project)
  * [TrackerControl / TC by TrackerControl / Oxford HCC](#trackercontrol--tc-by-trackercontrol--oxford-hcc)
  * [VLC for Android / vlc-android by Videolabs / VLC Mobile Team / VideoLAN / videolan](#vlc-for-android--vlc-android-by-videolabs--vlc-mobile-team--videolan--videolan)
  * [Wireguard by Jason A. Donenfeld](#wireguard-by-jason-a-donenfeld)
  * [Xtra by AndreyAsadchy or Andrey Asadchy and crackededed](#xtra-by-andreyasadchy-or-andrey-asadchy-and-crackededed)
  * [Others](#others)
* [Contribution](#contribution)
* [License](#license)
  * [GNU Free Documentation License, Version 1.3 (GFDL 1.3)](#gnu-free-documentation-license-version-13-gfdl-13)
  * [Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)](#creative-commons-attribution-sharealike-40-international-license-cc-by-sa-40)

---

## Author Information

The author of this tutorial is [**Willie169, Willie Shen, or 沈威宇**](https://github.com/Willie169).

If for whatever reason you want to send me money, here are where you may do so:

* BTC: bc1qm7fuvza2tktvjzfmvf37vw6yft5ntd2u5gh9l0
* ETH: 0xC5A26bF0F3564a77973a261624231Ac9DE647967
* BNB (BNB Smart Chain): 0xC5A26bF0F3564a77973a261624231Ac9DE647967
* SOL: 5ytjeNsMqxUqCZGHghGWjZNZHFSebwfAkKXepExmqvTU
* DOGE: DQUWv5vBhCLgoCCyNU2T4fh35ZhGi9cM4T
* XMR: 48j6iQDeCSDeH46gw4dPJnMsa6TQzPa6WJaYbBS9JJucKqg9Mkt5EDe9nSkES3b8u7V6XJfL8neAPAtbEpmV2f4XC7bdbkv

---

## Global Note

* This tutorial, as well as the software mentioned in it, is provided WITHOUT ANY WARRANTY, including but not limited to the implied warranties of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. Most of the software mentioned in this tutorial is open source.
* To prevent apps from being killed, you may turn off battery optimization and auto sleeping, set battery usage to unrestricted, acquire wakelock, etc. Go to [DontKillMyApp](#dontkillmyapp--dontkillmyapp-make-apps-work-by-urbandroid-team--urbandroid-team--petr-nalevka-urbandroid) for more information.
* Many sections of the tutorial mention F-Droid, read [F-Droid
* Many sections of the tutorial mention Termux. For people who are new to it, please refer to [Termux: A Powerful Terminal Emulation with an Extensive Linux Package Collection](#termux-a-powerful-terminal-emulation-with-an-extensive-linux-package-collection).
* For people who are new to POSIX, please refer to [POSIX References](#posix-references).
* You may encounter `Process completed (signal 9) press Enter` error even if you follow the steps in this tutorial. Read the tutorial about how to fix it in [Process completed (signal 9) press Enter Error](#process-completed-signal-9-press-enter-error).
* Many sections of the tutorial mention VNC. Go to [Introduction of VNC (Virtual Network Computing)](introduction-of-vnc-virtual-network-computing) for introduction of VNC. You can connect to a VNC server with a VNC client. One recommended one for Android is AVNC. Read [AVNC: A VNC Client for Android](#avnc-a-vnc-client-for-android).
* Run update command (such as `pkg update` and `apt update`) before install command (such as `pkg install` and `apt install`) to update available packages.
* Add `sudo` at the beginning of commands in Linux if root permission is needed. Remove `sudo` from the beginning of commands in Termux if the device is not rooted. Termux doesn’t need root permission to install packages etc.
* Type `Y`, `y`, `Yes`, `yes`, etc. as asked for in response to any prompts that request confirmation during command execution to confirm execution.
* Change the file names, directories, paths, addresses, ports, variables, etc. in the commands provided in the tutorial to the actual ones of yours.
* Some sections about Linux usages are included, some of which assumes the Linux distribution is Debian derived.
* When the tutorial uses text editor such as `nano`, `vim`, or `vi` to edit a file, you can use any text editor you want.
* In Linux, `root` is usually the password for root for the first time. You can usually set password latter by `passwd`.

---

## F-Droid: Free Software Android Apps Repository and App Store

### Install F-Droid

F-Droid (`org.fdroid.fdroid`) can be installed from [their official website](https://f-droid.org).

### Introduction of F-Droid

F-Droid is an installable catalogue of FOSS (Free and Open Source Software) applications for the Android platform. The client makes it easy to browse, install, and keep track of updates on your device.

F-Droid is both a repository of verified free software Android apps as well as a whole “app store kit”, providing all the tools needed to setup and run an app store. It is a community-run free software project developed by a wide range of contributors. It also includes complete build and release tools for managing the process of turning app source code into published builds.

The F-Droid server tools provide various scripts and tools that are used to maintain the main F-Droid application repository. You can use these same tools to create your own additional or alternative repository for publishing, or to assist in creating, testing and submitting metadata to the main repository.

### F-Droid Repositories

F-Droid repositories are compatible with an F-Droid client application. To add a repository, go to F-Droid app’s `Settings` page tap `My Apps > Repositories`, tap the plus sign in the lower right corner, and scan QR code or enter or paste repository URL.

The Offical F-Droid repository is <http://f-droid.org/repo>, which is pre-added in the app by default.

One of the most popular unofficial F-Droid repository is the [**IzzyOnDroid F-Droid repository**](http://apt.izzysoft.de/fdroid/repo).

A list of some known F-Droid repositories:

* **F-Droid**: <https://f-droid.org/repo>.
* **F-Droid Archive**: <https://f-droid.org/archive>.
* **Guardian Project**: <https://guardianproject.info/fdroid/repo>.
* **Guardian Project Archive**: <https://guardianproject.info/fdroid/archive>.
* **IzzyOnDroid**: <https://apt.izzysoft.de/fdroid/repo>.
* **microG**: <https://microg.org/fdroid/repo>.
* **Netsyms**: <https://repo.netsyms.com/fdroid/repo>.
* **Bromite**: <https://fdroid.bromite.org/fdroid/repo>.
* **Molly**: <https://molly.im/fdroid/foss/fdroid/repo>.
* **NewPipe**: <https://archive.newpipe.net/fdroid/repo>.
* **Collabora Office**: <https://www.collaboraoffice.com/downloads/fdroid/repo>.
* **LibRetro**: <https://fdroid.libretro.com/repo>.
* **KDE Android**: <https://cdn.kde.org/android/stable-releases/fdroid/repo>.
* **KDE Android Nightly**: <https://cdn.kde.org/android/fdroid/repo>.
* **The Calyx Institute (testing)**: <https://calyxos.gitlab.io/calyx-fdroid-repo/fdroid/repo>.
* **DivestOS Official**: <https://divestos.org/fdroid/official>.
* **DivestOS Unofficial**: <https://divestos.org/fdroid/unofficial>.
* **Fedilab Apps**: <https://fdroid.fedilab.app/repo>.
* **Kali Nethunter App Store**: <https://store.nethunter.com/repo>.
* **Umbrella**: <https://secfirst.org/fdroid/repo>.
* **Langis / Patched Apps**: <https://thecapslock.gitlab.io/fdroid-patched-apps/fdroid/repo>.
* **Bitwarden**: <https://mobileapp.bitwarden.com/fdroid/repo>.
* **Briar Project**: <https://briarproject.org/fdroid/repo>.
* **Wind Offline**: <https://guardianproject-wind.s3.amazonaws.com/fdroid/repo>.

---

## Termux: A Powerful Terminal Emulation with an Extensive Linux Package Collection

### Install Termux

Termux (`com.termux`) can be installed from [F-Droid](https://f-droid.org/packages/com.termux).

**WARNING**: If you installed termux from Google Play or a very old version, then you will receive package command errors. Google Play builds are deprecated and no longer supported. It is highly recommended that you update to termux-app v0.118.0 or higher as soon as possible for various bug fixes, including a critical world-readable vulnerability reported at <https://termux.github.io/general/2022/02/15/termux-apps-vulnerability-disclosures.html>. It is recommended that you shift to F-Droid or GitHub releases.

### Short Introduction of Termux

Termux is an Android terminal application and Linux environment. Termux combines powerful terminal emulation with an extensive Linux package collection. Some of the commands available in Linux are available in Termux too, such as `cp`, `mv`, `ls`, `mkdir`, `apt`, and `apt-get`.

Features:

* Shells: bash, zsh etc.
* Editors: nano, vi, vim, neovim, emac, etc.
* Connection: openssh, tor, iproute2, net-tools, curl, wget, tigervnc, x11vnc, etc.
* Development: gcc, g++, clang, gdb, openjdk-17, openjdk-21, python2, python3, nodejs, go, rust, perl, ruby, cmake, maven, git, subversion, gh, glab-cli, apksigner, android-tools, fdroidcl, etc.
* Emulation: proot, proot-distro, qemu-system, qemu-user, etc.
* Encryption: openssl, etc.
* Multimedia: ffmpeg, etc.
* Archiving: bzip, tar, etc.
* Graphical environment: fluxbox, openbox,xfce4, lxqt, mate, etc.
* Textual user interface: frotz, ncurses-utils, etc.

and more.

At first startup, a small base system is downloaded. Desired packages can then be installed using the apt package manager, which is known from the Debian and Ubuntu Linux distributions. To learn more, access the built-in help by long-pressing anywhere on the terminal and selecting the Help menu option.

* **Official Wiki**: <https://wiki.termux.com>.
* **Reddit community**: <https://termux.com/community>.

For people who are new to POSIX, please refer to [POSIX References](#posix-references).

### Termux App User Interface

* Pinch to zoom in or out.
* Swipe right from the left edge of the screen to drag out the navigation bar, where you can open Termux Settings, start another NEW SESSION, switch to another session, or launch KEYBOARD.
* Long press on screen to:
  * COPY
  * PASTE
  * More
  * Select URL
  * Share transcipt: transfer all output of the current session (via Android api)
  * Reset: Reset
  * Kill process: Kill the current terminal session process
  * Style: Style (requires Termux:Styling plugin)
  * Keep screen on
  * Help: Help documentation (Termux Wiki)

### Shortcuts in Termux

The following are some of the shortcuts commonly used in the terminal, and they also work in Ter­mux. The volume plus button (abbreviated to Volume below) can be used as a special key to generate a specific input, which can be roughly understood as the Fn key on a laptop.

* Ctrl + A - Move cursor to the start position
* Ctrl + E - Move cursor to the end
* Ctrl + K - Cut everything from here to the end
* Ctrl + U - Cut everything from here to the beginning
* Ctrl + W - Cut everything from here to the left
* Ctrl + Y - Paste words cut by Ctrl + U, Ctrl + D, or Ctrl + W
* Ctrl + L - Equivalent to clear command or clear screen
* Ctrl + C - Send Signal Interrupt (SIGINT), which terminate the process
* Ctrl + D - Close the terminal
* Ctrl + Z - Send Signal Terminal Stop (SIGTSTP), which suspend the current process
* Volume + E - Esc
* Volume + T - Tab
* Volume + 1 - F1
* Volume + 2 - F2
* Volume + 3 - F3
* Volume + 4 - F4
* Volume + 5 - F5
* Volume + 6 - F6
* Volume + 7 - F7
* Volume + 8 - F8
* Volume + 9 - F9
* Volume + 0 - F10
* Volume + B / Alt + B - Return a word when using readline
* Volume + F / Alt + F - Forward a word when using readline
* Volume + X / Alt + X
* Volume + W - Up Arrow
* Volume + A - Left Arrow
* Volume + S - Down Arrow
* Volume + D - Right Arrow
* Volume + L - | (pipe character)
* Volume + H - \~ (tilde character)
* Volume + U - \_ (underscore character)
* Volume + P - Page Up (previous page)
* Volume + N - Page Down (next page)
* Volume + . / Ctrl + \\ - Signal Quit (SIGQUIT)
* Volume + V - Show volume control
* Volume + Q / Volume + K - Show extra button view

### Types of Storage in Termux

There are three main types of storage in Termux:

* Internal storage: files put in `$HOME`, available from inside Termux or when explictly picked in an app compatible with Storage Access Framework (SAF).
* Shared storage: general purpose file storage available for the all applications allowed by user. The root directory of the main storage of Android is usually `/storage/emulated/0`.
* External storage: external SD cards or USB hard drives. Typically read-only, except the Termux private directory. Full read-write access to external SD cards and USB drives is available only on rooted devices.

Feature comparison between storage types:

<table>
<thead><tr><th title="Field #1">Storage type</th>
<th title="Field #2">chmod/chown support</th>
<th title="Field #3">Special files support</th>
<th title="Field #4">Executables support</th>
<th title="Field #5">Access mode</th>
</tr></thead>
<tbody><tr>
<td>Internal ($HOME/$PREFIX)</td>
<td>yes</td>
<td>yes</td>
<td>yes</td>
<td>RW (app dir)</td>
</tr>
<tr>
<td>Shared storage</td>
<td>no</td>
<td>no</td>
<td>no</td>
<td>RW</td>
</tr>
<tr>
<td>External storage</td>
<td>no</td>
<td>no</td>
<td>no</td>
<td>RO / RW (app dir)</td>
</tr>
</tbody></table>

### Storage Related Utilities in Termux

* To access shared and external storage you need to run `termux-setup-storage`. You will then be prompted to `Allow Termux access photos, media and files on your device`, which you should tap `Allow`.
* The contents of the created `~/storage` folder are symlinks to different storage folders. Run `termux-setup-storage` to rebuild its structure.
* After creating directory `Android/data/com.termux`, through file manager or by `termux-setup-storage`, you can access your external SD directly in this folder. The remainder of the external SD card will not be accessable from Termux unless you grant storage permission for Termux in Android. The symlink to the Termux-private folder on external storage will be `~/storage/external-1` or something similar. **WANRNING**: Please remember that if you uninstall Termux app or clear Termux application data through Android Settings (or Something similar), this directory will be deleted!
* If you have Termux:API application and `termux-api` package installed, you can use Android file picker to get any file from either shared or external storage by using utility `termux-storage-get`. For example, `termux-storage-get filename.txt` will save the file that has been chosen through file picker as `filename.txt`.
* You can access Termux home directory (`$HOME`) from the file manager using Storage Access Framework (SAF) and capable of accessing drives like USB or external SD-card in read-write mode. One recommended file manager which can access Termux home directory is [Material Files](https://play.google.com/store/apps/details?id=me.zhanghai.android.files). My tutorial for it is available in [Material File: Linux-Aware File Manager with FTP, SFTP, SMB and WebDAV Support](#material-file-linux-aware-file-manager-with-ftp-sftp-smb-and-webdav-support).

### Shell in Termux

A shell is an command language interpreter that executes commands from standard input devices (like a keyboard) or from a file. Shells are not a part of the system kernel, but use the system kernel to execute programs, create files, etc.

Use `chsh` from `termux-tools` to change your login shell. Currently Termux supports bash, fish, tcsh, zsh, xonsh, beanshell, and ipython. The default one is bash.

### Termux Chroot

If you want a classical Linux file system layout, you can to use `termux-chroot` from package `proot`. The `termux-chroot` utility may be very helpful if you use custom software that requires standard paths like `/tmp`, `/etc`, `/usr` to be available.

Install Proot:

```
pkg install proot
```

Use Termux chroot:

```
termux-chroot
```

Result:

```
$ ls /usr
bin  doc  etc  include lib  libexec  share  tmp  var
```

### Termux Fix Shebang

You may have a problem executing scripts that have standard shebangs (e.g. `#!/bin/sh`) because Termux is not FHS compliant. Use the `termux-fix-shebang` script to modify these files before executing. Recent versions of Termux provide a special package (`termux-exec`) which allows usage of standard shebangs.

### Environment Variables in Termux

* `$HOME` and `~` refer to `/data/data/com.termux/files/home`.
* `$PREFIX` refers to `/data/data/com.termux/files/usr`.
* Most packages have shared library dependencies which are installed to `$PREFIX/lib`. On devices before Android 7, Termux exports the special variable `$LD_LIBRARY_PATH` which tells the linker where to find shared library files. On Android 7 or higher, the `DT_RUNPATH ELF` header attribute is used instead of `LD_LIBRARY_PATH`.

### Difference Between Linux and Termux

* **Termux is not FHS compliant**: Termux does not follow Filesystem Hierarchy Standard unlike majority of Linux distributions. You cannot find directories like `/bin`, `/etc`, `/usr`, `/tmp` and others at the usual locations. Thus, all programs must be patched and recompiled to meet requirements of the Termux environment otherwise they will not be able to find their configuration files or other data. This is why Termux does not use official Debian or Ubuntu packages for its environment and you may have a problem executing scripts that have standard shebangs (e.g. `#!/bin/sh`).
* **Termux uses Bionic libc**: To have the best compatibility with Android OS and to remove the need to maintain custom toolchains we compile all our packages with the Android NDK. The resulting binaries are linked against the Bionic libc (`files libc.so`, `libm.so`, `libdl.so` from `/system/lib` or `/system/lib64`).
  * Dynamically linked programs will not run because the linker is expected in a nonexistent location (`/lib`) and libc ABI does not match.
  * Statically linked programs (only networking ones) will not be able to resolve DNS names. GNU libc normally doesn't allow static linking with resolver. Also, the file `/etc/resolv.conf` does not exist on Android.
  * On non-rooted Android 8 or newer, statically linked programs will not run due to issues with seccomp filter.
* Root file system is stored as ordinary application data: The root file system and user home directory are located in a private application data directory which lives on the `/data` partition. Paths to these directories are exposed as `$PREFIX` and `$HOME` respectively. You cannot move $PREFIX to another location because all programs expect that `$PREFIX` will not be changed. Additionally, you cannot have binaries, symlinks and other files from `$PREFIX` on sdcard because that file system does not support unix permissions, symlinks, sockets, etc.
* **Termux is single-user**: Android applications are sandboxed and have their own Linux user id and SELinux label. Everything within Termux is executed with the same user id as the Termux application itself and cannot be changed as it is derived from the user id by Bionic libc.
  * All packages in Termux (except root-only ones) are patched to drop any multiuser, setuid/setgid and other similar functionality.
  * Default ports for server packages are changed. `ftpd`, `httpd` and `sshd` have their default ports set to `8021`, `8080`, and `8022` respectively.

### Termux-Properties

You can edit properties of Termux by:

```
nano ~/.termux/termux-properties
```

Properties that can be changed include `default-working-directory`, `allow-external-apps`, `volume-keys`, etc.

### Termux PKG Package Manager

`pkg` is a tool for managing `apt` packages in Termux.

* Usage: `pkg [--check-mirror] command [arguments]`.
* `--check-mirror` \- forces a re-check of availability of mirrors
* Commands:
  * `autoclean` \- Remove all outdated packages from apt cache.
  * `clean` \- Remove all packages from apt cache.
  * `files <packages>` \- Show all files installed by packages.
  * `install <packages>` \- Install specified packages.
  * `list-all` \- List all packages available in repositories.
  * `list-installed` \- List installed packages.
  * `reinstall <packages>` \- Reinstall specified installed packages at the latest version.
  * `search <query>` \- Search package by query, for example by name or description part.
  * `show <packages>` \- Show basic metadata, such as dependencies.
  * `uninstall <packages>` \- Uninstall specified packages. Configuration files will be left intact.
  * `upgrade` \- Upgrade all installed packages to the latest version.
  * `update` \- Update apt databases from configured repositories.

### Debian Derivatives and Termux APT Package Manager

`apt` is a commandline package manager and provides commands for searching and managing as well as querying information about packages. It provides the same functionality as the specialized APT tools, like apt-get and apt-cache, but enables options more suitable for interactive use by default.

* Usage: `apt [options] command`
* Synopsys: `apt [-h] [-o=config_string] [-c=config_file] [-t=target_release] [-a=architecture] {list | search | show | update | install pkg [{=pkg_version_number | /target_release}]... | remove pkg... | upgrade | full-upgrade | edit-sources | {-v | --version} | {-h | --help}}`
* Most used commands:
  * `list` \- list packages based on package names
  * `search` \- search in package descriptions
  * `show` \- show package details
  * `install` \- install packages
  * `reinstall` \- reinstall packages
  * `remove` \- remove packages
  * `autoremove` \- automatically remove all unused packages
  * `update` \- update list of available packages
  * `upgrade` \- upgrade the system by installing/upgrading packages
  * `full-upgrade` \- upgrade the system by removing/installing/upgrading packages
  * `edit-sources` \- edit the source information file
  * `satisfy` \- satisfy dependency strings
* See apt(8) for more information about the available commands: <https://manpages.debian.org/unstable/apt/apt.8.en.html>.
* Configuration options and syntax is detailed in apt.conf(5): <https://manpages.debian.org/unstable/apt/apt.conf.5.en.html>.
* Information about how to configure sources can be found in sources.list(5): <https://manpages.debian.org/unstable/apt/sources.list.5.en.html>.
* Package and version choices can be expressed via apt\_preferences(5): <https://manpages.debian.org/unstable/apt/aptpreferences.5.en.html>.
* Security details are available in apt-secure(8): <https://manpages.debian.org/unstable/apt/apt-secure.8.en.html>.

### Termux Change Repo

* Run `termux-change-repo` command.
* Select one or more repositories for which you want to change mirror by tapping "space" and navigating over list by up/down arrow keys. Tap enter to confirm the choice.
* Pick a mirror. Control method is same as the last step.

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

<ul>
<li>Run <code>termux-change-repo</code> command.</li>
<li>Select one or more repositories for which you want to change mirror by tapping &quot;space&quot; and navigating over list by up/down arrow keys. Tap enter to confirm the choice.</li>
<li>Pick a mirror. Control method is same as the last step.</li>
<li>If you have installed other package repositories, like x11 and root, then you must select and change those mirrors as well. You can check your current mirrors by running the <code>termux-info</code> command. Note that the science and game repos have been merged into main repo and should be removed with <code>apt remove science-repo game-repo</code> if you have them installed.</li>
<li>Accept them by answering <code>y</code> if you receive errors like:
<pre><code>E: Repository &#39;https://grimler.se/termux-root-packages-24 root InRelease&#39; changed its &#39;Origin&#39; value from &#39;Bintray&#39; to &#39;termux-root-packages-24 root&#39;
E: Repository &#39;https://grimler.se/termux-root-packages-24 root InRelease&#39; changed its &#39;Label&#39; value from &#39;Bintray&#39; to &#39;termux-root-packages-24 root&#39;
N: This must be accepted explicitly before updates for this repository can be applied. See apt-secure(8) manpage for details.
Do you want to accept these changes and continue updating from this repository? [y/N]
</code></pre></li>
<li>After changing the mirror, it is highly advisable to run <code>pkg upgrade</code> command to update all packages to the latest available versions, or at least update <code>termux-tools</code> package with <code>pkg install termux-tools</code> command. Also make sure your device has internet connectivity and the repository URLs are accessible in a browser.</li>
</ul>

#### Manual Solution

* If for some reason `termux-change-repo` is not available, you can manually edit `sources.list` to replace the main url with a value obtained from [Termux Mirrors List](https://github.com/termux/termux-packages/wiki/Mirrors).
* Run `nano $PREFIX/etc/apt/sources.list` to edit it.
* This will not change the urls of other package repositories, to change those run `pkg install termux-tools` afterwards and use `termux-change-repo` or manually edit their files under `$PREFIX/etc/apt/sources.list.d` directory.
* Changing the mirror may specially be needed if a user is still using bintray as the mirror or `pkg upgrade` command hasn’t been run in a while to update termux package related scripts.

#### Further Readings and References about Package Command Error

* <https://github.com/termux/termux-packages/wiki/Package-Management>.
* <https://github.com/termux/termux-packages/issues/6726>.
* <https://github.com/termux/termux-packages/issues/6455>.
* <https://github.com/termux/termux-packages/wiki/Mirrors>.
* <https://github.com/cyb0rgdoll/freshtermux>.

### Process completed (signal 9) - press Enter Error

Some Android OS will kill any (phantom) processes greater than 32 (limit is for all apps combined) and also kill any processes using excessive CPU.

You may get `Process completed (signal 9) - press Enter` message in the terminal without actually exiting the shell process yourself.

Here is the guide of how to turn it off.

#### Graphical Fix

This fix is generally available for Stock Android 12L and beyond, and often unavailable for QEMs like OneUI, MiUi, Samsung, etc. and other non-stock Android. If this fix is not available for your phone, please refer to the command line solution in next section.

1. In phone’s Settings or something similar, go to `About Phone > Software Information` or something similar, and tap the `Version Number` seven times to enable `Developer Options`. Some phones may have different methods to enable `Developer Options`.
2. Click the section named `Feature Flags`.
3. Toggle off `settings_enable_monitor_phantom_procs` to disable phantom process killer.
4. To enable phantom process killer again, just toggle on `settings_enable_monitor_phantom_procs`.

#### Command Line Fix

<ol>
<li>Connect to Android Debug Bridge (ADB) of your Android device from another device or via Shizuku. For people who are new to them, please refer to the tutorial for them in <a href="#shizuku-systemui-tuner-and-ashell-use-local-adb-of-android-device-on-terminals-such-as-termux-without-another-device-with-shizuku-leave-developer-options-off-when-doing-so-with-systemui-tuner-and-use-adb-with-features-like-autocomplete-suggestion-with-ashell">Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell</a>.</li>
<li>Type <code>adb shell</code> to enter <code>adb shell</code>.</li>
<li>Run the following commands inside <code>adb shell</code>:
<pre><code>/system/bin/device_config set_sync_disabled_for_tests persistent
/system/bin/device_config put activity_manager max_phantom_processes 2147483647
settings put global settings_enable_monitor_phantom_procs false
</code></pre></li>
<li>To check the status of whether phantom process killer is disabled, run the following commands inside <code>adb shell</code>:
<pre><code>/system/bin/dumpsys activity settings | grep max_phantom_processes
/system/bin/device_config get activity_manager max_phantom_processes
</code></pre></li>
<li>To enable phantom process killer again, run the following commands inside <code>adb shell</code>:
<pre><code>/system/bin/device_config set_sync_disabled_for_tests none; /system/bin/device_config put activity_manager max_phantom_processes 32
settings put global settings_enable_monitor_phantom_procs true
</code></pre></li>
</ol>

#### Further Readings and References about Process completed (signal 9) - press Enter error

* <https://github.com/termux/termux-app/issues/2366#issuecomment-1237468220>.
* <https://github.com/termux/termux-app/issues/2366>.
* <https://docs.andronix.app/android-12/andronix-on-android-12-and-beyond>.
* <https://www.xda-developers.com/android-13-phantom-process-toggle>.
* <https://youtu.be/mjXSh3yq-I0>.
* <https://ivonblog.com/posts/fix-termux-signal9-error>.
* <https://kskroyal.com/disable-phantom-process-killer-in-android-12-13/#google%5Fvignette>.
* <https://issuetracker.google.com/u/1/issues/205156966>.
* <https://github.com/agnostic-apollo/Android-Docs/blob/master/en%2Fdocs%2Fapps%2Fprocesses%2Fphantom-cached-and-empty-processes.md>.

---

## POSIX References

**POSIX (Portable Operating System Interface)** is a family of standards specified by the IEEE for maintaining compatibility between operating systems. It defines a set of APIs, command-line interfaces, and utility interfaces to enable software portability across different Unix-like systems.

### Shell Reference

Go to [Bash Reference Manual](https://www.gnu.org/software/bash/manual/html\_node/index.html) for more information.

#### Shell Syntax

When the shell reads input, it proceeds through a sequence of operations. If the input indicates the beginning of a comment, the shell ignores the comment symbol (`#`), and the rest of that line.

Otherwise, roughly speaking, the shell reads its input and divides the input into words and operators, employing the quoting rules to select which meanings to assign various words and characters.

The shell then parses these tokens into commands and other constructs, removes the special meaning of certain words or characters, expands others, redirects input and output as needed, executes the specified command, waits for the command’s exit status, and makes that exit status available for further inspection or processing.

#### Shell Commands

A simple shell command such as `echo a b c` consists of the command itself followed by arguments, separated by spaces.

More complex shell commands are composed of simple commands arranged together in a variety of ways: in a pipeline in which the output of one command becomes the input of a second, in a loop or conditional construct, or in some other grouping.

#### Shell Functions

Shell functions are a way to group commands for later execution using a single name for the group. They are executed just like a "regular" command. When the name of a shell function is used as a simple command name, the list of commands associated with that function name is executed. Shell functions are executed in the current shell context; no new process is created to interpret them.

Functions are declared using this syntax:

```
fname () compound-command [ redirections ]
```

or

```
function fname [()] compound-command [ redirections ]
```

This defines a shell function named fname. The reserved word function is optional. If the function reserved word is supplied, the parentheses are optional.

#### Shell Parameters

A parameter is an entity that stores values. It can be a name, a number, or one of the special characters listed below. A variable is a parameter denoted by a name. A variable has a value and zero or more attributes. Attributes are assigned using the `declare` builtin command.

A parameter is set if it has been assigned a value. The null string is a valid value. Once a variable is set, it may be unset only by using the unset builtin command.

A variable may be assigned to by a statement of the form

```
name=[value]
```

If value is not given, the variable is assigned the null string. All values undergo tilde expansion, parameter and variable expansion, command substitution, arithmetic expansion, and quote removal.

#### Shell Expansion

Expansion is performed on the command line after it has been split into tokens. The order of expansions is: brace expansion; tilde expansion, parameter and variable expansion, arithmetic expansion, and command substitution (done in a left-to-right fashion); word splitting; and filename expansion.

#### Shell Redirections

Before a command is executed, its input and output may be redirected using a special notation interpreted by the shell. Redirection allows commands’ file handles to be duplicated, opened, closed, made to refer to different files, and can change the files the command reads from and writes to. Redirection may also be used to modify file handles in the current shell execution environment. The following redirection operators may precede or appear anywhere within a simple command or may follow a command. Redirections are processed in the order they appear, from left to right.

* Redirecting input: `[n]<word`.
* Redirecting output: `[n]>[|]word`.
* Appending redirected output: `[n]>>word`.
* Redirecting standard output and standard error: `&>word` (preferred) or `>&word`. This is semantically equivalent to `>word 2>&1`.
* Appending standard output and standard error: `&>>word`. This is semantically equivalent to `>>word 2>&1`.

<h3 id="file-and-directory-management"><strong>File and Directory Management</strong></h3>
<table>
<thead>
<tr>
<th>Command</th>
<th>Usage</th>
</tr>
</thead>
<tbody><tr>
<td><code>ls</code></td>
<td>List directory contents: <code>ls</code>
<ul>
<li><code>ls -l</code>: long format</li>
<li><code>ls -a</code>: include hidden files</li>
<li><code>ls -A</code>: include hidden files except <code>.</code> (current directory) and <code>..</code> (parent directory)</li>
<li><code>ls -lh</code>: human-readable sizes.<li><code>ls -d</code>: show directory names instead of their contents</li>
<li><code>ls -R</code>: list subdirectories recursively</li>
<li><code>ls -t</code>: sort by modification time (newest first)</li>
<li><code>ls -S</code>: sort by file size (largest first)</li>
</li>
<li><code>ls -X</code>: sort by extension</li>
<li><code>ls -r</code>: reverse order of sorting</li>
<li><code>ls -1</code>: list one entry per line</li>
<li><code>ls -F</code>: append indicators (<code>/</code> for directories, <code>*</code> for executables, etc.)</li>
<li><code>ls -p</code>: append <code>/</code> to directories</li>
<li><code>ls --color=auto</code>: colorize output based on file type</li>
<li><code>ls -i</code>: show inode numbers</li>
<li><code>ls -n</code>: show numeric UID and GID instead of names</li>
<li><code>ls -g</code>: like <code>-l</code> but without showing owner</li>
<li><code>ls -o</code>: like <code>-l</code> but without group information</li>
<li><code>ls --time=ctime</code>: sort by change time (instead of modification)</li>
<li><code>ls --time=access</code>: sort by last access time</li>
<li><code>ls -Z</code>: show SELinux security context (if enabled)</li>
<li><code>ls --full-time</code>: show complete timestamps</li>
</ul>
</td>
</tr>
<tr>
<td><code>cd</code></td>
<td>Change directory: <code>cd /path/to/dir</code></td>
</tr>
<tr>
<td><code>pwd</code></td>
<td>Print current working directory</td>
</tr>
<tr>
<td><code>mkdir</code></td>
<td>Create a new directory: <code>mkdir newdir</code>
<ul>
<li><code>mkdir -m newdir</code>: set file mode (as in <code>chmod</code>), not <code>a=rwx - umask</code></li>
<li><code>mkdir -p newdir</code>: no error if existing, make parent directories as needed,                                        with their file modes unaffected by any <code>-m</code> option</li>
</ul>
</td>
</tr>
<tr>
<td><code>rmdir</code></td>
<td>Remove empty directory: <code>rmdir emptydir</code></td>
</tr>
<tr>
<td><code>rm</code></td>
<td>Remove files or directories: <code>rm file</code>
<ul>
<li><code>rm -r dir</code>: recursive</li>
<li><code>rm -f</code>: force</li>
</ul>
</td>
</tr>
<tr>
<td><code>cp</code></td>
<td>Copy files/directories: <code>cp src dest</code>
<ul>
<li><code>cp -r dir1 dir2</code>: recursive</li>
</ul>
</td>
</tr>
<tr>
<td><code>mv</code></td>
<td>
<ul>
<li><code>mv oldname newname</code>: rename files/directories</li>
<li><code>mv file /destination/</code>: move files/directories</li>
</ul>
</td>
</tr>
<tr>
<td><code>touch</code></td>
<td>
<li><code>touch newfile.txt</code>: Create an empty <code>newfile.txt</code> or update its timestamp</li>
<li><code>touch -c newfile.txt</code>: Don’t create <code>newfile.txt</code> if it doesn’t exist</li>
</tr>
<tr>
<td><code>find</code></td>
<td>Search for files: <code>find [path] [options] [expression]</code>
<ul>
<li><code>find /home/user/ -name &#39;*.txt&#39;</code>: Find all <code>.txt</code> files under <code>/home/user/</code></li>
<li><code>find . -type d -name &#39;dir*&#39;</code>: Find directories starting with <code>dir</code></li>
</ul>
</td>
</tr>
<tr>
<td><code>locate</code></td>
<td>Quickly find files using an index: <code>locate filename</code> (remember to run <code>updatedb</code></td>
</tr>
<tr>
<td><code>updatedb</code></td>
<td>Update the <code>locate</code> database</td>
</tr>
<tr>
<td><code>stat</code></td>
<td>Display detailed file information: <code>stat file</code></td>
</tr>
<tr>
<td><code>tree</code></td>
<td>Show directory structure in a tree format (not always installed)</td>
</tr>
<tr>
<td><code>df</code></td>
<td>Show disk usage of file systems: <code>df [options] [file]</code>
<li><code>df -h</code>: human-readable size</li>
<li><code>df -T</code>: include filesystem type</li>
<li><code>df --total</code>: Show a grand total of all file systems</li>
</td>
</tr>
<tr>
<td><code>du</code></td>
<td>Show disk usage of files and directories: <code>du [options] [file]</code>
<li><code>du -h</code>: human-readable size</li>
<li><code>du -sh /path/to/dir</code>: Show the total size of <code>/path/to/dir</code></li>
<li><code>du -a</code>: Show the size of all files and directories</li>
<li><code>du --max-depth=1</code>: Limit the depth of directory traversal to 1 level</li>
</td>
</tr>
<tr>
<td><code>basename</code></td>
<td>Extract filename from a path: <code>basename /path/to/file</code></td>
</tr>
<tr>
<td><code>dirname</code></td>
<td>Extract directory path from a full file path: <code>dirname /path/to/file</code></td>
</tr>
</tbody></table>
<h3 id="file-permissions-and-ownership"><strong>File Permissions and Ownership</strong></h3>
<table>
<thead>
<tr>
<th>Command</th>
<th>Usage</th>
</tr>
</thead>
<tbody><tr>
<td><code>chmod</code></td>
<td>Change file permissions:
<ul>
<li>Numeric Mode:
<ul>
<li>Syntax: <code>chmod [permissions] file</code></li>
<li>First number in permissions is for user (owner), second is for group, third is for others</li>
<li>Permissions:</li>
<li><code>4</code>: read</li>
<li><code>2</code>: write</li>
<li><code>1</code>: execute</li>
<li>Permissions are additive. For example, <code>7</code> = <code>4</code> + <code>2</code> + <code>1</code></li>
</ul>
</li>
<li>Symbolic Mode:
<ul>
<li>Syntax: <code>chmod [who][+/-/=][permissions] file</code></li>
<li>Who:</li>
<li><code>u</code>: User (owner)</li>
<li><code>g</code>: Group</li>
<li><code>o</code>: Others</li>
<li><code>a</code>: All (user, group, and others)</li>
<li>Operators</li>
<li><code>+</code>: Add permission</li>
<li><code>-</code>: Remove permission</li>
<li><code>=</code>: Set exact permission</li>
<li>Permissions:</li>
<li><code>r</code>: read</li>
<li><code>w</code>: write</li>
<li><code>x</code>: execute</li>
</ul>
</li>
<li>Recursively:<br>
<code>-R</code> or <code>--recursive</code>: change files and directories recursively. The following options modify how a hierarchy is traversed when the <code>-R</code> option is also specified. If more than one is specified, only the final one takes effect. <code>-H</code> is the default.
<ul>
<li><code>-H</code>: if a command line argument is a symbolic link to a directory, traverse it</li>
<li><code>-L</code>: traverse every symbolic link to a directory encountered</li>
<li><code>-P</code>: do not traverse any symbolic links</li>
</ul>
</li>
</ul>
</td>
</tr>
<tr>
<td><code>chown</code></td>
<td>Change file owner: <code>chown [options] user[:group] file</code>
<ul>
<li><code>chown user file.txt</code>: Change the owner to <code>user</code></li>
<li><code>chown user:group file.txt</code>: Change the owner to <code>user</code> and the group to <code>group</code></li>
<li><code>chown :group file.txt</code>: Change the group to <code>group</code> without changing the owner</li>
<li>Recursively: same as <code>chmod</code></li>
</ul>
</td>
</tr>
<tr>
<td><code>chgrp</code></td>
<td>Change group ownership: <code>chgrp group file</code></td>
</tr>
<tr>
<td><code>umask</code></td>
<td>Set default permissions: <code>umask 022</code> (default 755 for new files)</td>
</tr>
</tbody></table>
<h3 id="file-viewing-and-manipulation"><strong>File Viewing and Manipulation</strong></h3>
<table>
<thead>
<tr>
<th>Command</th>
<th>Usage</th>
</tr>
</thead>
<tbody><tr>
<td><code>cat</code></td>
<td>Display file contents: <code>cat file.txt</code></td>
</tr>
<tr>
<td><code>tac</code></td>
<td>Display file contents in reverse order</td>
</tr>
<tr>
<td><code>more</code></td>
<td>View file page by page (scroll forward only)</td>
</tr>
<tr>
<td><code>less</code></td>
<td>View file page by page (scroll forward and backward)</td>
</tr>
<tr>
<td><code>head</code></td>
<td>Show first N lines: <code>head -n 10 file.txt</code></td>
</tr>
<tr>
<td><code>tail</code></td>
<td>Show last N lines: <code>tail -n 10 file.txt</code>, <code>tail -f logfile</code> (follow changes)</td>
</tr>
<tr>
<td><code>cut</code></td>
<td>Extract specific fields: <code>cut -d&#39;:&#39; -f1 /etc/passwd</code></td>
</tr>
<tr>
<td><code>sort</code></td>
<td>Sort lines: <code>sort file.txt</code>, <code>sort -n numbers.txt</code></td>
</tr>
<tr>
<td><code>uniq</code></td>
<td>Remove duplicate lines: `sort file.txt</td>
</tr>
<tr>
<td><code>wc</code></td>
<td>Count words, lines, characters: <code>wc -l file.txt</code></td>
</tr>
<tr>
<td><code>diff</code></td>
<td>Compare two files: <code>diff file1 file2</code></td>
</tr>
<tr>
<td><code>cmp</code></td>
<td>Compare two files byte by byte</td>
</tr>
<tr>
<td><code>tee</code></td>
<td>Read from standard input and write to file and standard output: `echo &quot;hello&quot;</td>
</tr>
<tr>
<td><code>split</code></td>
<td>Split large files into smaller ones: <code>split -b 1M largefile</code></td>
</tr>
<tr>
<td><code>paste</code></td>
<td>
Merge lines of files:
<ul>
<li><code>paste file1 file2</code>: Merge corresponding lines from two files</li>
<li><code>paste -d ',' file1 file2</code>: Use a comma as a delimiter</li>
<li><code>paste -s file</code>: Merge all lines of a file into a single line</li>
</ul>
</td>
</tr>
<tr>
<td><code>tr</code></td>
<td>
Translate or delete characters:
<ul>
<li><code>echo "hello" | tr 'a-z' 'A-Z'</code>: Convert lowercase to uppercase</li>
<li><code>echo "hello world" | tr -d 'o'</code>: Delete all 'o' characters</li>
<li><code>echo "hello world" | tr ' ' '\n'</code>: Convert spaces to newlines</li>
</ul>
</td>
</tr>
<tr>
<td><code>xargs</code></td>
<td>
Build and execute command lines:
<ul>
<li><code>echo file1 file2 | xargs rm</code>: Remove listed files</li>
<li><code>find . -name "*.txt" | xargs cat</code>: Concatenate all .txt files</li>
<li><code>cat list.txt | xargs -n 1 echo</code>: Process one argument per line</li>
</ul>
</td>
</tr>
<tr>
<td><code>grep</code></td>
<td>
Search for patterns in files:
<ul>
<li><code>grep "pattern" file</code>: Search for 'pattern' in a file</li>
<li><code>grep -i "pattern" file</code>: Case-insensitive search</li>
<li><code>grep -r "pattern" /path</code>: Recursively search in a directory</li>
<li><code>grep -v "pattern" file</code>: Exclude lines matching 'pattern'</li>
</ul>
</td>
</tr>
<tr>
<td><code>egrep</code> / <code>fgrep</code></td>
<td>
Extended and fixed string search:
<ul>
<li><code>egrep "regex" file</code>: Extended regular expressions</li>
<li><code>fgrep "string" file</code>: Fixed string search (no regex)</li>
</ul>
</td>
</tr>
<tr>
<td><code>cut</code></td>
<td>
Extract portions of text:
<ul>
<li><code>cut -d ':' -f 1 /etc/passwd</code>: Extract first field using ':' as delimiter</li>
<li><code>cut -c 1-5 file</code>: Extract first five characters of each line</li>
</ul>
</td>
</tr>
<tr>
<td><code>awk</code></td>
<td>
Process and analyze text files:
<ul>
<li><code>awk '{print $1}' file</code>: Print first field of each line</li>
<li><code>awk -F ':' '{print $1, $3}' /etc/passwd</code>: Specify a field separator</li>
<li><code>awk 'NR==3' file</code>: Print only the third line</li>
</ul>
</td>
</tr>
<tr>
<td><code>sed</code></td>
<td>
Stream editing:
<ul>
<li><code>sed 's/old/new/g' file</code>: Replace 'old' with 'new'</li>
<li><code>sed -n '5p' file</code>: Print only the fifth line</li>
<li><code>sed '/pattern/d' file</code>: Delete lines matching 'pattern'</li>
</ul>
</td>
</tr>
</tbody></table>
<h3 id="process-and-job-management"><strong>Process and Job Management</strong></h3>
<table>
<thead>
<tr>
<th>Command</th>
<th>Usage</th>
</tr>
</thead>
<tbody><tr>
<td><code>ps</code></td>
<td>Show active processes: <code>ps aux</code> (detailed list)</td>
</tr>
<tr>
<td><code>top</code></td>
<td>Display real-time system processes</td>
</tr>
<tr>
<td><code>htop</code></td>
<td>Interactive process monitor (not always installed)</td>
</tr>
<tr>
<td><code>kill</code></td>
<td>Send signal to a process: <code>kill PID</code>, <code>kill -9 PID</code> (force kill)</td>
</tr>
<tr>
<td><code>pkill</code></td>
<td>Kill process by name: <code>pkill processname</code></td>
</tr>
<tr>
<td><code>jobs</code></td>
<td>Show background jobs</td>
</tr>
<tr>
<td><code>fg</code></td>
<td>Bring background job to foreground: <code>fg %1</code></td>
</tr>
<tr>
<td><code>bg</code></td>
<td>Resume a suspended job in the background: <code>bg %1</code></td>
</tr>
<tr>
<td><code>nohup</code></td>
<td>Run a process immune to hangups: <code>nohup command &amp;</code></td>
</tr>
<tr>
<td><code>nice</code></td>
<td>Start a process with a priority: <code>nice -n 10 command</code></td>
</tr>
<tr>
<td><code>renice</code></td>
<td>Change process priority: <code>renice 10 -p PID</code></td>
</tr>
<tr>
<td><code>time</code></td>
<td>Measure execution time of a command: <code>time command</code></td>
</tr>
</tbody></table>
<h3 id="networking"><strong>Networking</strong></h3>
<table>
<thead>
<tr>
<th>Command</th>
<th>Usage</th>
</tr>
</thead>
<tbody><tr>
<td><code>ping</code></td>
<td>Check network connectivity: <code>ping example.com</code></td>
</tr>
<tr>
<td><code>wget</code></td>
<td>Download files: <code>wget URL</code></td>
</tr>
<tr>
<td><code>curl</code></td>
<td>Transfer data: <code>curl -O URL</code> (download), <code>curl -X POST URL</code></td>
</tr>
<tr>
<td><code>scp</code></td>
<td>Copy files over SSH: <code>scp file user@host:/path</code></td>
</tr>
<tr>
<td><code>rsync</code></td>
<td>Efficient file transfer: <code>rsync -av source destination</code></td>
</tr>
<tr>
<td><code>netstat</code></td>
<td>Show network connections and ports: <code>netstat -tulnp</code></td>
</tr>
<tr>
<td><code>ss</code></td>
<td>More advanced network statistics: <code>ss -tulnp</code></td>
</tr>
<tr>
<td><code>traceroute</code></td>
<td>Show network route to a host: <code>traceroute example.com</code></td>
</tr>
<tr>
<td><code>dig</code></td>
<td>Query DNS records: <code>dig example.com</code></td>
</tr>
<tr>
<td><code>nslookup</code></td>
<td>Query DNS: <code>nslookup example.com</code></td>
</tr>
</tbody></table>
<h3 id="disk-and-system-information"><strong>Disk and System Information</strong></h3>
<table>
<thead>
<tr>
<th>Command</th>
<th>Usage</th>
</tr>
</thead>
<tbody><tr>
<td><code>uptime</code></td>
<td>Show system uptime</td>
</tr>
<tr>
<td><code>who</code></td>
<td>Show logged-in users</td>
</tr>
<tr>
<td><code>w</code></td>
<td>Show active users and their processes</td>
</tr>
<tr>
<td><code>id</code></td>
<td>Show user ID and group ID</td>
</tr>
<tr>
<td><code>uname</code></td>
<td>Show system information: <code>uname -a</code></td>
</tr>
<tr>
<td><code>hostname</code></td>
<td>Show system hostname</td>
</tr>
<tr>
<td><code>df</code></td>
<td>Show disk space usage: <code>df -h</code></td>
</tr>
<tr>
<td><code>du</code></td>
<td>Show directory size: <code>du -sh /path</code></td>
</tr>
<tr>
<td><code>free</code></td>
<td>Show memory usage: <code>free -m</code></td>
</tr>
<tr>
<td><code>vmstat</code></td>
<td>Show system performance statistics</td>
</tr>
<tr>
<td><code>iostat</code></td>
<td>Show CPU and I/O statistics</td>
</tr>
</tbody></table>
<h3 id="archiving-and-compression"><strong>Archiving and Compression</strong></h3>
<table>
<thead>
<tr>
<th>Command</th>
<th>Usage</th>
</tr>
</thead>
<tbody><tr>
<td><code>tar</code></td>
<td>Archive files: <code>tar -cvf archive.tar files</code>, <code>tar -xvf archive.tar</code> (extract)</td>
</tr>
<tr>
<td><code>gzip</code></td>
<td>Compress files: <code>gzip file</code></td>
</tr>
<tr>
<td><code>gunzip</code></td>
<td>Decompress files: <code>gunzip file.gz</code></td>
</tr>
<tr>
<td><code>zip</code></td>
<td>Create ZIP archive: <code>zip archive.zip files</code></td>
</tr>
<tr>
<td><code>unzip</code></td>
<td>Extract ZIP archive: <code>unzip archive.zip</code></td>
</tr>
</tbody></table>
<h3 id="user-management"><strong>User Management</strong></h3>
<table>
<thead>
<tr>
<th>Command</th>
<th>Usage</th>
</tr>
</thead>
<tbody><tr>
<td><code>whoami</code></td>
<td>Show current user</td>
</tr>
<tr>
<td><code>who</code></td>
<td>Show logged-in users</td>
</tr>
<tr>
<td><code>groups</code></td>
<td>Show groups a user belongs to</td>
</tr>
<tr>
<td><code>passwd</code></td>
<td>Change user password</td>
</tr>
<tr>
<td><code>su</code></td>
<td>Switch user: <code>su - username</code></td>
</tr>
<tr>
<td><code>sudo</code></td>
<td>Run command as superuser: <code>sudo command</code></td>
</tr>
</tbody></table>
<h3 id="miscellaneous"><strong>Miscellaneous</strong></h3>
<table>
<thead>
<tr>
<th>Command</th>
<th>Usage</th>
</tr>
</thead>
<tbody><tr>
<td><code>echo</code></td>
<td>Print text: <code>echo &quot;Hello&quot;</code></td>
</tr>
<tr>
<td><code>date</code></td>
<td>Show current date and time</td>
</tr>
<tr>
<td><code>cal</code></td>
<td>Show calendar</td>
</tr>
<tr>
<td><code>clear</code></td>
<td>Clear terminal screen</td>
</tr>
<tr>
<td><code>history</code></td>
<td>Show command history</td>
</tr>
<tr>
<td><code>alias</code></td>
<td>Create alias: <code>alias ll=&#39;ls -l&#39;</code></td>
</tr>
<tr>
<td><code>env</code></td>
<td>Show environment variables</td>
</tr>
<tr>
<td><code>export</code></td>
<td>Set environment variable: <code>export VAR=value</code></td>
</tr>
</tbody></table>

---

## Termux:Styling, Termux:Widget, Termux:Boot, Termux:Float, and Termux:API

### Termux:Styling

Termux:Styling (`com.termux.styling`) can be installed from [F-Droid](https://f-droid.org/packages/com.termux.styling).

This plugin for Termux provides beautiful color schemes and powerline-ready fonts to customize the appearance of the terminal.

Long-press anywhere on the Termux terminal and use the "Style" menu entry to use after installation.

Go to [the official wiki](https://wiki.termux.com/wiki/Termux:Styling) for more information.

### Termux:Widget

Termux:Widget (`com.termux.widget`) can be installed from [F-Droid](https://f-droid.org/packages/com.termux.widget).

Add-on app which adds shortcuts to Termux scripts and commands on the home screen. Scripts should be placed in the `$HOME/.shortcuts/` folder to allow quick access to frequently used commands without typing.

Go to [the official wiki](https://wiki.termux.com/wiki/Termux:Widget) for more information.

### Termux:Boot

Termux:Boot (`com.termux.boot`) can be installed from [F-Droid](<https://f-droid.org/packages/com.termux.boot).

This plugin for Termux allows programs to be run at boot.

Instructions:

* Start the Termux:Boot app once by clicking on its launcher icon.
* This allow the app to be run at boot.
* Create the `~/.termux/boot/` directory.
* Put scripts you want to execute inside the `~/.termux/boot/` directory.
* If there are multiple files, they will be executed in a sorted order.

Note that you may want to run `termux-wake-lock` as first thing want to ensure that the device is prevented from sleeping.

Go to [the official wiki](https://wiki.termux.com/wiki/Termux:Boot) for more information.

### Termux:Float

Termux:Float (`com.termux.float`) can be installed from [F-Droid](https://f-droid.org/packages/com.termux.float).

This plugin for Termux provides a floating terminal window which is shown above other apps.

Long-press on the floating window to move or resize it and tap on the notification to temporarily hide it.

Go to [the official wiki](https://wiki.termux.com/wiki/Termux:Float) for more information.

### Termux:API

Termux:API (`com.termux.api`) can be installed from [F-Droid](https://f-droid.org/packages/com.termux.api).

Expose basic Android functionality like sending SMS or accessing GPS data to the Termux app. This is an add-on which requires that the main Termux app is installed to use.

* Read and send sms messages from your terminal.
* Access device GPS location sensor from scripts.
* Pipe the result of commands into the device text-to-speech engine.
* Vibrate the device when something interesting happens.
* Access the system clipboard from shell scripts.
* List contacts from the system contact list.

Besides installing this app an additional package is required to install inside Termux:

```
apt install termux-api
```

Go to [the official wiki](https://wiki.termux.com/wiki/Termux:API) for more information.

---

## TigerVNC, Termux-x11, Fluxbox, Openbox, XFCE, LXQt, and MATE: Termux VNC or X Server and Graphical Environment

### Introduction of VNC (Virtual Network Computing)

VNC (Virtual Network Computing) is a graphical desktop-sharing system that uses the Remote Frame Buffer protocol (RFB) to remotely control another computer. It transmits the keyboard and mouse input from one computer to another, relaying the graphical-screen updates, over a network.

### Introduction of X Window System (X11, or X)

The X Window System (X11, or simply X) is a windowing system for bitmap displays, common on Unix-like operating systems. X is an architecture-independent system for remote graphical user interfaces and input device capabilities. Each person using a networked terminal has the ability to interact with the display with any type of user input device. The X server is typically the provider of graphics resources and keyboard/mouse events to X clients.

### Termux X11 Repository

X11 packages are available in a separate APT repository. You can enable it by running the following command:

```
pkg install x11-repo
```

It will automatically add appropriate sources.list file and PGP key. You can disable this repository by running the following command:

```
pkg uninstall x11-repo
```

### TigerVNC VNC Server in Termux

Go to [their official website](https://tigervnc.org) for more information.

#### Install TigerVNC

```
pkg install x11-repo
pkg install tigervnc
```

#### Start a VNC Server

```
vncserver [:1] [-geometry 1920x1080]
```

You can optionally specify port with `:port` and resolution with `-geometry`. VNC server will start on the unused port with the smallest number on localhost if no port specified.

You can specify xstartup script in the `~/.vnc/xstartup` file. When the VNC server starts, it will run the script in `~/.vnc/xstartup` (if any).

At first time, you will be prompted for setting up passwords:

```
You will require a password to access your desktops.

Password:
Verify:
Would you like to enter a view-only password (y/n)? n
```

Note that passwords are not visible when you are typing them and maximal password length is 8 characters.

If everything is okay, you will see this message:

```
New 'localhost:1 ()' desktop is localhost:1

Creating default startup script /data/data/com.termux/files/home/.vnc/xstartup
Creating default config /data/data/com.termux/files/home/.vnc/config
Starting applications specified in /data/data/com.termux/files/home/.vnc/xstartup
Log file is /data/data/com.termux/files/home/.vnc/localhost:1.log
```

It means that the server is available on display `localhost:1`.

To make programs do graphical output to the display `localhost:1`, set environment variable like shown here (yes, without specifying `localhost`):

```
export DISPLAY=":1"
```

You may even put this variable to your bashrc or profile so you don’t have to always set it manually unless display address will be changed.

You can connect to the VNC server from a VNC viewer to view the output.

Note that you have to start a windows manager or desktop environment in `~/.vnc/xstartup` or no graphical environment will be shown.

#### Kill a VNC Server

```
vncserver -kill localhost:1
```

Replace `:1` with the actual port your VNC server started on.

### Termux-x11

#### Install Termux-x11 App

Termux-x11 (`com.termux.x11`) app for Android can be installed from the .apk asset corresponding to your architecture in [its GitHub](https://github.com/termux/termux-x11) release.

#### Install Termux-x11 Package

```
pkg install x11-repo
pkg install termux-x11-nightly
```

#### Start a Termux-x11 X Server

To start Termux-x11 X server, run:

```
termux-x11 :1 -xstartup "$XSTARTUP"
```

Replace `:1` with the actual port you want and `$XSTARTUP` with the actual xstartup script.

Note that you have to start a windows manager or desktop environment in the argument of `-xstartup` or no graphical environment will be shown.

#### Connect to a Termux-x11 X Server

Open the Termux-x11 app. It will connect to the Termux-x11 X server automatically.

### Fluxbox in Termux

#### Install Fluxbox

```
pkg install fluxbox
```

#### Xstartup Script

```
#!/data/data/com.termux/files/usr/bin/sh
fluxbox-generate_menu
fluxbox &
```

Fluxbox windows manager will start automatically on VNC or X server startup.

### Openbox in Termux

#### Install Openbox

```
pkg install openbox pypanel xorg-xsetroot
```

#### Xstartup Script

```
#!/data/data/com.termux/files/usr/bin/sh
openbox-session &
```

Don’t put any other command than the lines above to the xstartup script since Openbox has its own autostart script, which is located at `${PREFIX}/etc/xdg/openbox/autostart`.

```
nano ~/etc/xdg/openbox/autostart
```

Copy below and paste to it (replace `gray` with the color you want):

```
# Make background gray.
xsetroot -solid gray
pypanel &
```

Openbox windows manager will start automatically on VNC or X server startup.

### XFCE in Termux

#### Install XFCE

```
pkg install xfce4
```

#### Xstartup Script

```
#!/data/data/com.termux/files/usr/bin/sh
xfce4-session &
```

Don’t put any other command than the lines above to the xstartup script.

XFCE desktop environment will start automatically on VNC or X server startup.

#### Additional Recommended Packages for Installation

* `netsurf` \- Simple graphical web browser. Javascript is not supported.
* `xfce4-terminal` \- Terminal emulator for XFCE. It is not included as part of XFCE installation to allow use of `aterm` or `st`.

### LXQt in Termux

#### Install LXQt

```
pkg install lxqt
```

#### Xstartup Script

```
#!/data/data/com.termux/files/usr/bin/sh
startlxqt &
```

Don’t put any other command than the lines above to the xstartup script.

LXQt desktop environment will start automatically on VNC or X server startup.

#### Additional Recommended Packages for Installation

* `otter-browser` \- Free and open source web browser that aims to recreate aspects of Opera 12.x
* `qterminal` \- Terminal emulator for LXQt. It is not included as part of LXQt installation to allow use of `aterm` or `st`.

### MATE in Termux

#### Install MATE

```
pkg install mate-* marco
```

#### Xstartup Script

```
#!/data/data/com.termux/files/usr/bin/sh
mate-session &
```

Don’t put any other command than the lines above to the xstartup script.

MATE desktop environment will start automatically on VNC server startup.

#### Additional Recommended Packages for Installation

* `netsurf` \- Simple graphical web browser. Javascript is not supported.
* `mate-terminal` \- Terminal emulator for MATE. It is not included as part of MATE installation to allow use of `aterm` or `st`.

### Further Readings and References about Termux VNC or X Server and Graphical Environment

* <https://wiki.termux.com/wiki/Graphical%5FEnvironment>.
* <https://github.com/termux/x11-packages>.
* <https://github.com/termux/termux-x11>.
* <https://en.wikipedia.org/wiki/VNC>.
* <https://en.wikipedia.org/wiki/X\_Window\_System>.

---

## AVNC: A VNC Client for Android

### Install AVNC

AVNC (`com.gaurav.avnc`) can be installed from [F-Droid](https://f-droid.org/packages/com.gaurav.avnc).

### Connect a VNC Server

* Tap the `+` sign in the lower right corner,
* Input `Name` (arbitrary name), `Host address` (`localhost` for localhost), and `Port`, input `Username` and `Password` if needed, adjust `ADVANCED` options if needed, and then tap `SAVE`.
* Tap the `Server` name to connect to it.
* If you encounter incorrect mouse display or recieving, going to `Settings` \> `Input` \> `Mouse` and toggling on `Hide local pointer` may help.
* Note that you may have to run `export DISPLAY='1'`, `export DISPLAY=remote_host:0`, or similar commands in the server side to set the display of the session to the client.

### Introduction of AVNC

* Gesture styles: Automatic, Touchscreen (Do actions at touch-point), or Touchpad mode (Do actions at pointer).
* Material Design: Dark theme and light theme.
* Configurable gestures: Configure the meaning of each gesture.
* Tight encoding.
* Virtual Keys: Go to Settings => Input => Virtual keys => Customize keys to customize Virtual Key layout.
* Picture-in-Picture mode.
* View-only mode.
* Zeroconf Server Discovery.
* TLS support: AnonTLS and VeNCrypt.
* SSH tunnel: VNC over SSH.
* Import/Export servers.
* VNC Repeater support.
* Clipboard Sync with server.
* Pause update in background.
* Automatic reconnection.
* Automatically find supported servers.

---

## Tailscale: Peer-to-Peer Mesh VPN

### Introduction of Tailscale

Tailscale is a modern, user-friendly mesh VPN that creates a secure, peer-to-peer network between your devices using [WireGuard](https://www.wireguard.com). It allows devices across different networks to communicate directly without complex firewall configurations or port forwarding.

WireGuard is a registered trademark of Jason A. Donenfeld.

Features of Tailscale:

* Easy setup: No need for manual VPN configurations. Just sign in with an identity provider. Google, Microsoft, GitHub, Apple, and passkey are available.
* Zero trust security: Enforces access control using multi-factor authentication (MFA) and device authentication.
* Automatic NAT traversal: Works across different networks, even behind NAT and firewalls.
* Mesh networking: Devices connect directly when possible, improving performance and reducing latency.
* Access Control Lists (ACLs): Fine-grained control over which devices can communicate.
* Multiplatform support: Supports Linux, Windows, macOS, Android, iOS, etc.
* Exit nodes: Use a specific device as a VPN gateway.
* Subnet routing: Access remote networks securely.

Go to [their official website](https://tailscale.com) for more information.

### Tailscale in Linux

#### Install

```
curl -fsSL https://tailscale.com/install.sh | sh
```

#### Log in

```
sudo tailscale up
```

Log in via <https://login.tailscale.com/login>. Google, Microsoft, GitHub, Apple, and passkey are available.

#### Systemd Enable

```
sudo systemctl enable tailscaled
```

#### Manually Start Userspace Networking

```
sudo tailscaled --tun=userspace-networking &
```

#### Tailscale IP

Your tailscale ip will be

```
tailscale ip
```

You can connect to it from another device logged in with the same account.

#### Subnet Routing

If you want to access devices on your local network through Tailscale, enable subnet routing

```
sudo tailscale up --advertise-routes=192.168.1.0/24
```

### Tailscale in Android

#### Install Tailscale

Tailscale (`com.tailscale.ipn`) can be installed from [F-Droid](https://f-droid.org/packages/com.tailscale.ipn) or [Google Play](https://play.google.com/store/apps/details?id=com.tailscale.ipn).

#### Introduction of Tailscale in Android

Tailscale is a mesh VPN alternative that makes it easy to connect your devices, wherever they are. No more fighting configuration or firewall ports. Built on WireGuard®, Tailscale enables an incremental shift to zero-trust networking by implementing “always-on” remote access. This guarantees a consistent, portable, and secure experience independent of physical location.

You can view the devices logged in and their Tailscale IPs in the app.

---

## PRoot-Distro with Termux: Install Linux Distributions in Termux

### Introduction of Chroot, PRoot, PRoot-Distro

* **Chroot**: Chroot is an operation on Unix and Unix-like operating systems that changes the apparent root directory for the current running process and its children. A program that is run in such a modified environment cannot name (and therefore normally cannot access) files outside the designated directory tree.
* **PRoot**: PRoot is a user-space implementation of chroot, mount --bind, and binfmt\_misc. This means that users don’t need any privileges or setup to do things like using an arbitrary directory as the new root file system, making files accessible somewhere else in the file system hierarchy, or executing programs built for another CPU architecture transparently through QEMU user-mode.
* **PRoot-Distro**: PRoot-Distro is a Bash script wrapper for PRoot. It provides a set of functions with standardized command line interface to let user easily manage Linux PRoot containers. By default it supports a number of well known Linux distributions such Alpine Linux, Debian or openSUSE. However it is possible to add others with a help of plug-ins.

### PRoot-Distro Usage

* Usage: `proot-distro [COMMAND] [ARGUMENTS]`
* Commands:
  * `help` \- Show this help information.
  * `backup` \- Backup a specified distribution.
  * `install` \- Install a specified distribution.
  * `list` \- List supported distributions and their installation status.
  * `login` \- Launch a login shell for the specified distribution if no additional arguments were given. Otherwise execute the
given command and exit.
    * Usage: `proot-distro login [OPTIONS] [DISTRO ALIAS] [-- [COMMAND]]`
    * Command aliases: `sh`
    * Options:
      * `--help` \- Show this help information.
      * `--user [user]` \- Login as specified user instead of 'root'.
      * `--fix-low-ports` \- Modify bindings to protected ports to use a higher port number.
      * `--isolated` \- Run isolated environment without access to host file system.
      * `--termux-home` \- Mount Termux home directory to /root. Takes priority over `--isolated` option.
      * `--shared-tmp` \- Mount Termux temp directory to /tmp. Takes priority over `--isolated` option.
      * `--bind [path:path]` \- Custom file system binding. Can be specified multiple times. Takes priority over `--isolated` option.
      * `--no-link2symlink` \- Disable hardlink emulation by proot. Adviseable only on devices with SELinux in permissive mode.
      * `--no-sysvipc` \- Disable System V IPC emulation by proot.
      * `--no-kill-on-exit` \- Wait until all running processes will finish before exiting. This will cause proot to freeze if you are running daemons.
      * `--no-arch-warning` \- Suppress warning about CPU not supporting 32-bit instructions.
      * `--kernel [string]` \- Set the kernel release and compatibility level to string.
      * `--work-dir [path]` \- Set the working directory.
      * `--env ENV=val` \- Set environment variable. Can be specified multiple times.
    * Put `--` if you wish to stop command line processing and pass options as shell arguments.
    * If no `--isolated` option given, the following host directories will be available:
      * `/apex` (only Android 10+)
      * `/data/dalvik-cache`
      * `/data/data/com.termux`
      * `/sdcard`
      * `/storage`
      * `/system`
      * `/vendor`
  * `remove` \- Delete a specified distribution. **WARNING**: this command destroys data!
  * `rename` \- Rename installed distribution.
  * `reset` \- Reinstall from scratch a specified distribution. WARNING: this command destroys data!
  * `restore` \- Restore a specified distribution. WARNING: this command destroys data!
  * `clear-cache` \- Clear cache of downloaded files.

### Supported Distributions

Here are the supported distributions (alias: name):

* alpine: Alpine Linux (edge)
* archlinux: Arch Linux ARM
* artix: Artix Linux (AArch64 only)
* debian: Debian (stable)
* deepin: Deepin (beige)
* fedora: Fedora 39 (AArch64 only)
* manjaro: Manjaro (AArch64 only)
* openkylin: OpenKylin (Yangtze)
* opensuse: OpenSUSE (Tumbleweed)
* pardus: Pardus (yirmibir)
* ubuntu: Ubuntu (23.10)
* void: Void Linux

### Hint to Install Linux OS with PRoot-Distro

Type command `proot-distro list` to get a list of the supported distributions.

Pick a distro alias and run the next command to install it:

```
proot-distro install <alias> [--override-alias <new alias>]
```

Runtime data is stored at this location:

```
/data/data/com.termux/files/usr/var/lib/proot-distro
```

If you have issues with proot during installation or login, try to set `PROOT_NO_SECCOMP=1` environment variable.

---

## Andronix with Termux: Install Linux Distributions in Termux

### Install Andronix App (Optional)

Andronix (`studio.com.techriz.andronix`) can be installed from [Google Play](https://play.google.com/store/apps/details?id=studio.com.techriz.andronix).

Andronix is an app that lets you install Linux distributions like Ubuntu, Debian, Manjaro etc. in Termux on non-rooted Android devices with PRoot. Andronix provides paid, close-source modded OS too, which won’t be mentioned in this tutorial.

### Install an OS Following Andronix App Instructions

1. Open Andronix app.
2. Click the Linux Distribution card.
3. Click on the Linux distribution you want to install. It is recommended to get started with Ubuntu or Debian if you are overwhelmed by the options.
4. Click on the user interface you want. Graphical User Interface or GUI is the visual interface that you interact with to do things in your Linux distribution. Command Line Interface or CLI is the text-based interface that you interact with to execute commands and perform tasks in your Linux distribution.
5. Desktop Environment: You can choose a Desktop Environment if you would like to use your mouse as well as your keyboard, or you’ve little or no experience with Linux.
6. Window Manager: You can choose a Window Manager if you only want to use your keyboard to manage windows and other OS-level tasks. These are pretty light and fast, but do require some skill before getting productive.
7. CLI Only: If you don’t want a Graphical User-interface, you can go ahead with the Command Line Interface.
8. Andronix will automatically copy the command to your clipboard.
9. Paste and run in Termux.

### Uninstall an Not Modded OS Following Andronix App Instructions

1. Open Andronix app.
2. Click the Linux Distribution card.
3. Long press on the Linux distribution you want to uninstall.
4. Select Uninstall.
5. Andronix will automatically copy the command to your clipboard.
6. Paste and run in Termux (Not inside that OS).

### PulseAudio Server Sound Output

#### Install and Setup

Run the following command in Termux (Not inside that OS):

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

The file directory of the Debian OS will be `debian-fs`. You can read, write, and execute files in it both in Termux or in the Debian OS.

#### Turn on the OS (CLI)

```
./start-debian.sh
```

#### VNC Server

1. Run `vncserver-start` in the OS to start the VNC server (default on port 1).
2. Get a VNC viewer. AVNC is recommended for Android.
3. Add a new connection with address `localhost:1`.
4. View GUI of the OS from VNC viewer.
5. Run `vncserver-start` in the OS to kill all VNC servers.

### Example: Debian with CLI Only

#### Install Debian

```
pkg update -y && pkg install wget curl proot tar -y && wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Installer/Debian/debian.sh -O debian.sh && chmod +x debian.sh && bash debian.sh
```

The file directory of the Debian OS will be `debian-fs`. You can read, write, and execute files in it both in Termux or in the Debian OS.

#### Turn on the OS (CLI)

```
./start-debian.sh
```

### Example: Uninstall Debian OS (Not Modded)

```
wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Uninstall/Debian/UNI-debian.sh && chmod +x UNI-debian.sh && bash UNI-debian.sh
```

### Further Readings and References about Chroot, Proot, and Andronix

* <https://en.wikipedia.org/wiki/Chroot>.
* <https://github.com/AndronixApp/AndronixOrigin>.
* <https://github.com/termux/proot>.
* <https://wiki.termux.com/wiki/PRoot>.

---

## QEMU System Emulation with Termux: Full System Emulation

### Install QEMU System Emulation for x86-64

Run the following command in Termux:

```
pkg update && pkg install qemu-utils qemu-common qemu-system-x86-64-headless wget -y
```

### Install QEMU System Emulation for AArch64

Run the following command in Termux:

```
pkg update && pkg install qemu-utils qemu-common qemu-system-aarch64-headless wget -y
```

### ISO and QCOW2 Image Methods

For more complex distribution like Debian and Ubuntu, using ISO image method is easier to encounter some issues like GRUB menu not showing on CLI or stuck in the middle of the installation process which QCOW2 image method usually doesn’t cause.

### Host Port Forwarding

Set `hostfwd` to set host port forwarding. Take `hostfwd=tcp::2222-:22` for example, `tcp` specifies the TCP protocol for the forwarding rule, `::2222` indicates that on the host machine, TCP connections to port 2222 will be forwarded, and `-:22` indicates that these connections will be forwarded to port 22 (the default SSH port) on the guest virtual machine.

### Alpine Linux x86-64 ISO Image

#### Installation

```
size='5G'
memory='1024'
cpu='2'
pkg update && pkg install qemu-utils qemu-common qemu-system-x86-64-headless wget -y
mkdir ~/alpine-x86_64 && cd ~/alpine-x86_64
wget https://dl-cdn.alpinelinux.org/v3.21/releases/x86_64/alpine-virt-3.21.0-x86_64.iso
qemu-img create -f qcow2 alpine-x86_64.img $size
qemu-system-x86_64 -machine q35 -m $memory -smp cpus=$cpu -cpu qemu64 -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd -netdev user,id=n1,dns=8.8.8.8,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 -cdrom alpine-virt-3.21.0-x86_64.iso -drive file=alpine-x86_64.img,format=qcow2 -nographic
```

Run below in the Alpine Linux VM to setup:

```
setup-alpine
```

#### CLI Only

```
memory='1024'
cpu='2'
qemu-system-x86_64 -machine q35 -m $memory -smp cpus=$cpu -cpu qemu64 -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd -netdev user,id=n1,dns=8.8.8.8,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 -drive file=~/alpine-x86_64/alpine-x86_64.img,format=qcow2 -nographic
```

#### With VNC Display

```
memory='1024'
cpu='2'
qemu-system-x86_64 -machine q35 -m $memory -smp cpus=$cpu -cpu qemu64 -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd -netdev user,id=n1,dns=8.8.8.8,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 -drive file=~/alpine-x86_64/alpine-x86_64.img,format=qcow2 -vnc :0
```

### Alpine Linux AArch64 ISO Image

#### Installation

```
size='5G'
memory='1024'
cpu='2'
pkg update && pkg install qemu-utils qemu-common qemu-system-aarch64-headless wget -y
mkdir ~/alpine-aarch64 && cd ~/alpine-aarch64
wget https://dl-cdn.alpinelinux.org/alpine/latest-stable/releases/aarch64/alpine-virt-3.21.0-aarch64.iso
qemu-img create -f qcow2 alpine-aarch64.img $size
qemu-system-aarch64 -machine virt -m $memory -smp cpus=$cpu -cpu cortex-a72 -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-aarch64-code.fd -netdev user,id=n1,dns=8.8.8.8,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 -cdrom alpine-virt-3.21.0-aarch64.iso -drive file=alpine-aarch64.img,format=qcow2 -nographic
```

Run below in the Alpine Linux VM to setup:

```
setup-alpine
```

#### CLI Only

```
memory='1024'
cpu='2'
qemu-system-aarch64 -machine virt -m $memory -smp cpus=$cpu -cpu cortex-a72 -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-aarch64-code.fd -netdev user,id=n1,dns=8.8.8.8,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 -drive file=~/alpine-aarch64/alpine-aarch64.img,format=qcow2 -nographic
```

#### With VNC Display

```
memory='1024'
cpu='2'
qemu-system-aarch64 -machine virt -m $memory -smp cpus=$cpu -cpu cortex-a72 -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-aarch64-code.fd -netdev user,id=n1,dns=8.8.8.8,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 -drive file=~/alpine-aarch64/alpine-aarch64.img,format=qcow2 -vnc :0
```

### Debian Linux AMD64 QCOW2 Image

#### Installation

```
size='5G'
memory='1024'
cpu='2'
pkg update && pkg install qemu-utils qemu-common qemu-system-x86-64-headless wget -y
mkdir ~/debian-amd64 && cd ~/debian-amd64
wget https://cloud.debian.org/images/cloud/bookworm/latest/debian-12-nocloud-amd64.qcow2
qemu-img resize debian-12-nocloud-amd64.qcow2 +$size
qemu-system-x86_64 -machine q35 -m $memory -smp cpus=$cpu -cpu qemu64 -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd -netdev user,id=n1,dns=8.8.8.8,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 -drive file=~/debian-amd64/debian-12-nocloud-amd64.qcow2,format=qcow2 -nographic
```

#### CLI Only

```
memory='1024'
cpu='2'
qemu-system-x86_64 -machine q35 -m $memory -smp cpus=$cpu -cpu qemu64 -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd -netdev user,id=n1,dns=8.8.8.8,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 -drive file=~/debian-amd64/debian-12-nocloud-amd64.qcow2,format=qcow2 -nographic
```

#### With VNC Display

```
memory='1024'
cpu='2'
qemu-system-x86_64 -machine q35 -m $memory -smp cpus=$cpu -cpu qemu64 -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd -netdev user,id=n1,dns=8.8.8.8,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 -drive file=~/debian-amd64/debian-12-nocloud-amd64.qcow2,format=qcow2 -vnc :0
```

### Debian Linux ARM64 QCOW2 Image

#### Installation

```
size='5G'
memory='1024'
cpu='2'
pkg update && pkg install qemu-utils qemu-common qemu-system-aarch64-headless wget -y
mkdir ~/debian-arm64 && cd ~/debian-arm64
wget https://cloud.debian.org/images/cloud/bookworm/latest/debian-12-nocloud-arm64.qcow2
qemu-img resize debian-12-nocloud-arm64.qcow2 +$size
qemu-system-aarch64 -machine virt -m $memory -smp cpus=$cpu -cpu cortex-a72 -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-aarch64-code.fd -netdev user,id=n1,dns=8.8.8.8,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 -drive file=~/debian-arm64/debian-12-nocloud-arm64.qcow2,format=qcow2 -nographic
```

#### CLI Only

```
memory='1024'
cpu='2'
qemu-system-aarch64 -machine virt -m $memory -smp cpus=$cpu -cpu cortex-a72 -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-aarch64-code.fd -netdev user,id=n1,dns=8.8.8.8,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 -drive file=~/debian-arm64/debian-12-nocloud-arm64.qcow2,format=qcow2 -nographic
```

#### With VNC Display

```
memory='1024'
cpu='2'
qemu-system-aarch64 -machine virt -m $memory -smp cpus=$cpu -cpu cortex-a72 -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-aarch64-code.fd -netdev user,id=n1,dns=8.8.8.8,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 -drive file=~/debian-arm64/debian-12-nocloud-arm64.qcow2,format=qcow2 -vnc :0
```

### Check Image Info

In host, run:

```
qemu-img info <image>
```

### Check VM Disk

Inside guest, run:

```
df -h
```

and for partition, run:

```
lsblk
```

### Resize Image

In host, run:

```
qemu-img resize <image> +5G
```

`+5G` indicates increasing 5GB disk image. You can adjust the size as needed.

### Resize Partition in Debian AMD64

In Debian guest, run:

```
sudo apt update
sudo apt install parted e2fsprogs -y
sudo parted /dev/sda
```

In `(parted)`, run:

```
print
fix
resizepart 1 100%
quit
```

and then in Debian guest run:

```
sudo resize2fs /dev/sda1
```

### Resize Partition in Debian ARM64

In Debian guest, run:

```
sudo apt update
sudo apt install parted e2fsprogs -y
sudo parted /dev/vda
```

In `(parted)`, run:

```
print
fix
resizepart 1 100%
quit
```

and then in Debian guest run:

```
sudo resize2fs /dev/vda1
```

### Further Readings and References about QEMU

* <https://ivonblog.com/posts/termux-qemu-system-linux>.
* <https://www.qemu.org/docs/master/index.html>.
* <https://www.debian.org/distrib/index.en.html>.
* <https://www.reddit.com/r/debian/s/s871vXlGRI>.

---

## Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell

### Install Shizuku

Shizuku (`moe.shizuku.privileged.api`) can be installed from [IzzyOnDroid F-Droid repository](https://apt.izzysoft.de/fdroid/index/apk/moe.shizuku.privileged.api) or [Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api).

### Introduction of ADB and Shizuku

* **Android Debug Bridge (ADB)**: The Android Debug Bridge (ADB) is a programming tool used for the debugging of Android-based devices. The daemon on the Android device connects with the server on the host PC over USB or TCP, which connects to the client that is used by the end-user over TCP. Made available as open-source software under the Apache License by Google, its features include a shell and the possibility to make backups. The ADB software is available for many devices such as Windows, Linux and macOS. It has been misused by botnets and other malware, for which mitigations were developed such as RSA authentication and device whitelisting.
* **Shizuku**: Shizuku is an open-source app for serving multiple apps that require root/adb. If your "root required app" only needs adb permission, you can easily expand the audience by using Shizuku. Also, Shizuku is significantly faster than root shell. Go to [their official website](https://shizuku.rikka.app) for more information.

### Connect Shizuku to Wireless ADB

1. Grant Shizuku notification permission.
2. Tap `Pairing` in `Start via Wireless debugging` block in Shizuku.
3. Connect to a WiFi you trust. You don’t need to log in to the WiFi though. You just need to let your phone think that you’re connected to WiFi.
4. In phone’s `Settings` or something similar, go to `About Phone` \> `Software Information` or something similar, and tap the `Version Number` seven times to enable `Developer Options`. Some phones may have different methods to enable `Developer Options`.
5. In the `Developer Options`, enable `Wireless ADB` and tap `Pair with a pairing code`.
6. Input the pairing code in the notification of Shizuku.
7. In the `Developer Options`, togle on `Disable adb authorization timeout` if you don’t want to do all the above again every few times using Shizuku. If the connection is disconnected due to whatever reason, follow [Reconnect Shizuku in Case it Stops with SystemUI Tuner](#reconnect-shizuku-in-case-it-stops-with-systemui-tuner) to reconnect if you’re using SystemUI Tuner, or follow above guide again to reconnect.
8. Back to Shizuku and tap `Start` in `Start via Wireless debugging` block. You all see Shizuku is running on the top of the app interface of Shizuku.

### Use Shizuku in a Terminal Application for the First Time

1. Tap `Use Shizuku in terminal applications` in Shizuku and export files `rish` and `rish_shizuku.dex` to somewhere on your phone.
2. Use a text editor to replace `PKG` in `rish` with the package name of your terminal application. Take Termux for example, Termux’s package name is `com.termux`. Run `termux-setup-storage` and tap `Allow to grant Termux storage permission`.
3. Open your terminal application and move the exported files to somewhere it can access (usually with `mv old_location new_location`). The root directory of the main storage of Android is usually `/storage/emulated/0`. One recommended terminal application for Android is Termux. My tutorial for it is available in [Termux: A Powerful Terminal Emulation with an Extensive Linux Package Collection](#termux-a-powerful-terminal-emulation-with-an-extensive-linux-package-collection).
4. Go to the directory you moved the exported files to with `cd directory` (assumed `~/shizuku` below) and run `sh rish`.
5. `~ $` should become `<device>:/ $` (such as `e2q:/ $`) if `sh rish` succeeded. Write ADB commands here. Note that there is no need to use `adb` or `adb shell` prefixes before commands and that `devices` command gets `/system/bin/sh: devices: inaccessible or not found`.
6. You can turn WiFi off after ADB is connected. The notification of Shizuku may say Paring failed after that, but you can check Shizuku app to check whether there’s a block that reads `Shizuku is running` on the top.
7. Optionally, create a `.sh` file (`nano ~/shizuku.sh` for example), paste `cd shizuku && sh rish`, save it, and make it executable with `chmod +x shizuku.sh` so that you can run this shortcut to start Shizuku on your terminal afterward.

### Install SystemUI Tuner

SystemUI Tuner can be installed from [Google Play](https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner) (pub: Zachary Wander).

### To Leave Developer Options off When Using Shizuku to Connect to ADB with SystemUI Tuner

**WARNING**: In Android 14’s latest update, now Enable ADB can’t be persistently on unless USB connected.

Some apps (such as many financial apps) may require `Developer Options` to be off when using them. This section is the tutorial about how to turn `Developer Options` off while still using ADB Shell with Shizuku.

1. Run `adb shell` command `pm grant com.zacharee1.systemuituner android.permission.WRITE_SECURE_SETTINGS` (you can do it with Shizuku and a terminal such as Termux or aShell).
2. Connect to a WiFi. You don’t need to log in or have real WiFi access, just make your phone believes you are connected to WiFi.
3. Turn off `Developer Options` if it’s on. The toggle switch is usually on the top of `Developer Options`.
4. In SystemUI Tuner, go to `Developer` and turn on `Enable ADB` and `Enable Wireless ADB`.
5. In SystemUI Tuner, go to `Persistent Options` and select `Enable ADB`.
6. Press `Start` on Shizuku.
7. Turn off WiFi. `Enable Wireless ADB` will be turned off automatically by system settings. You can check that in `SystemUI Tuner`.

### Reconnect Shizuku in Case it Stops with SystemUI Tuner

1. Connect to a WiFi. You don’t need to log in or have real WiFi access, just make your phone believes you are connected to WiFi.
2. Turn off `Developer Options` if it’s on. The toggle switch is usually on the top of `Developer Options`.
3. In SystemUI Tuner, go to `Developer` and turn on `Enable Wireless ADB`.
4. Press `Start` on Shizuku.
5. Turn off WiFi. `Enable Wireless ADB` will be turned off automatically by system settings. You can check that in SystemUI Tuner.

### Other SystemUI Tuner Usage

SystemUI Tuner exposes some hidden options in Android. You can set them, add them to `Persistent Options` to keep them on, etc. Different manufacturers may remove or change these options, which SystemUI Tuner may not work around.

You may need to run the following `adb shell` command (you can do it with Shizuku and a terminal such as Termux or aShell) in order to change the settings:

```
pm grant com.zacharee1.systemuituner android.permission.WRITE_SECURE_SETTINGS
pm grant com.zacharee1.systemuituner android.permission.PACKAGE_USAGE_STATS
pm grant com.zacharee1.systemuituner android.permission.DUMP
```

### aShell

#### Install aShell

aShell can be installed from [F-Droid](https://f-droid.org/packages/in.sunilpaulmathew.ashell).

#### Introduction of aShell

* An elegantly designed user interface.
* Included a bundle of examples about common adb commands.
* Handles continuously running commands, such as logcat, top, etc.
* Search for specific text from the last command output.
* Option to save last command output as a text file.
* Bookmark frequently using commands.
* Dark/light theme.
* Auto complete.

#### Usage of aShell

1. Give aShell the permission `moe.shizuku.manager.permission.API_V23`.
2. Connect to ADB.
3. Use aShell.

### Further Readings and References about ADB and Shizuku

* <https://developer.android.com/tools/adb>.
* <https://android.googlesource.com/platform/packages/modules/adb>.
* <https://shizuku.rikka.app>.

---

## Tor, Tor Browser, NoScript Security Suite, and Torsocks

### Introduction of Tor

Tor is a free overlay network for enabling anonymous communication. Built on free and open-source software and more than seven thousand volunteer-operated relays worldwide, users can have their Internet traffic routed via a random path through the network.

Using Tor makes it more difficult to trace a user’s Internet activity by preventing any single point on the Internet (other than the user’s device) from being able to view both where traffic originated from and where it is ultimately going to at the same time. This conceals a user’s location and usage from anyone performing network surveillance or traffic analysis from any such point, protecting the user’s freedom and ability to communicate confidentially.

Key Features of Tor:

* Block Trackers: Isolates each website you visit so third-party trackers and ads can’t follow you.
* Defend Against Surveillance: Prevents someone watching your connection from knowing what websites you visit.
* Resist Fingerprinting: Aims to make all users look the same, making it difficult for you to be fingerprinted based on your browser and device information.
* Multi-layered Encryption: Traffic is relayed and encrypted three times as it passes over the Tor network. The network is comprised of thousands of volunteer-run servers known as Tor relays.
* Browse Freely: With Tor, you are free to access sites your local internet service provider may have blocked and access hidden services with .onion domain names, which are not reachable through standard web browsers.

Some services may crash when routing traffic through Tor, changing the Exit nodes may help.

### Install Tor Browser

Tor Browser can be installed from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser) or [the Guardian Project F-Droid repository](https://guardianproject.info/fdroid/repo). For the latter, please refer to [F-Droid Repositories](#f-droid-repositories) for more information about how to add a F-Droid repository to your F-Droid client app.

The Tor Browser for Android is a mobile version of the Tor Browser that utilizes Mozilla Firefox for Android codebase.

### NoScript Security Suite

**NoScript (or NoScript Security Suite)** is a free and open-source extension for Firefox- and Chromium-based web browsers, written and maintained by Giorgio Maone, a software developer and member of the Mozilla Security Group. By default, NoScript blocks active (executable) web content, which can be wholly or partially unblocked by allowlisting a site or domain from the extension’s toolbar menu or by clicking a placeholder icon. It is recommended to enable NoScript for all Tor sites unless you fully trust it.

### Tor in Termux

#### Install

```
pkg install tor
```

#### Configurations

```
nano $PREFIX/etc/tor/torrc
```

Default SOCKS proxy port is:

```
SOCKSPort 9050
```

#### Run

```
tor
```

or in background,

```
tor &
```

You can add `tor &` in `.bashrc` (or `.zshrc`) to start Tor automatically when opening Termux.

### Torsocks in Termux

#### Install

```
pkg install torsocks
```

#### Configurations

```
nano $PREFIX/etc/tor/torsocks.conf
```

Default address and port are:

```
TorAddress 127.0.0.1
TorPort 9050
```

To use the `tor` in Termux, use `TorAddress 127.0.0.1` and ensure `TorPort` is the same as the `SOCKSPort` in `$PREFIX/etc/tor/torrc`.

#### Usage

You can route any command through Tor by adding `torsocks` in the beginning of the command. For example:

```
torsocks curl https://check.torproject.org
```

You can add aliases in `.bashrc` (or `.zshrc`) to force commands to go through `torsocks`. For example:

```
alias apt="torsocks apt"
```

To start `tor` and let it run in background on every boot, you can install Termux:Boot and add

```
#!/data/data/com.termux/files/usr/bin/bash
nohup tor &
```

to `~/.termux/boot/boot.sh`.

---

## TrackerControl and InviZible Pro: Route Traffic through Tor, Block DNS over UDP, Set DNS Server, Block Trackers, etc.

This section mentions Tor, for people who are new to it, please refer to [Tor, Tor Browser, NoScript Security Suite, and Torsocks](#tor-tor-browser-noscript-security-suite-and-torsocks).

### Install InviZible Pro

InviZible Pro (`pan.alexander.tordnscrypt.stable`) can be installed from [F-Droid](https://f-droid.org/packages/pan.alexander.tordnscrypt.stable) or [Google Play](https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp).

### Install TrackerControl

TrackerControl (`net.kollnig.missioncontrol.fdroid`), also known as TC, can be installed from [F-Droid](https://f-droid.org/packages/net.kollnig.missioncontrol.fdroid).

**WARNING**: Please avoid use the Google Play version because it doesn’t have the feature like trackers blocking in order to comply with Google’s terms.

* Blocking trackers can be used independently or with proxy (such as Prxoy mode of InviZible Pro).
* TrackerControl has a `Traffic log` feature for free, which can help a lot in identifying which trackers should be unblocked when the services crash.
* This tutorial section, including the setting `.xml`, can be used in NetGuard as well because TrackerControl uses NetGuard’s code. However, `Traffic log` feature is not available in NetGuard’s free version but only available in Pro version. NetGuard is available on F-Droid: <https://f-droid.org/packages/eu.faircode.netguard> or Google Play: <https://play.google.com/store/apps/details?id=eu.faircode.netguard>.
* You have to disable monitoring of apps route traffic through Tor itself within TrackerControl, such as Tor Browser, and Termux if you’re using `tor`, `torsocks`, or similar things.

### Configure TrackerControl to Block Trackers without InviZible Pro

* Block unwanted trackers in the main interface of the apps.
* TrackerControl categorizes trackers by port, corporation, category, etc. You can easily block and allow connections. You may have to try several time to figure out what trackers to allow in order to prevent apps from crashing in few cases.
* Turn on TrackerControl as the VPN service of the device.

### Configure TrackerControl and InviZible Pro for DNSCrypt and Tor

#### Configure TrackerControl

1. Turn on TrackerControl as the VPN service of the device.
2. Go to TrackerControl.
3. Disable `Monitoring` of InviZible Pro (`pan.alexander.tordnscrypt.stable`).
4. Go to the `Settings` \> `Advanced options`.
5. Turn on `Block Trackers on UDP`.
6. Set the `SOCKS5 address` to `127.0.0.1`.
7. Set the `SOCKS port` to the port you’ve configured Tor to use in InviZible Pro (`9050` by default).
8. Enable the `Use SOCKS5 proxy` option.
9. Tap `Port forwarding`.
10. Tap `⊕`. Set `protocol` as `UDP`, `Source port` to `53`, `Destination address` to `127.0.0.1`, `Destination port` to the port you configure DNSCrypt of InviZible pro to listen to (`5354` by default), and `Destination app` to `nobody`.
11. Tap `⊕`. Set `protocol` as `TCP`, `Source port` to `53`, `Destination address` to `127.0.0.1`, `Destination port` to the port you configure DNSCrypt of InviZible pro to listen to (`5354` by default), and `Destination app` to `nobody`.
12. Set first (above)` VPN DNS` as `9.9.9.9`.
13. Set second (below) `VPN DNS` as `149.112.112.112`.
14. Set where to validate the internet connection in `Validate at` if you want, `www.f-droid.org` for example.
15. Block unwanted trackers and set other things if you want.

If you export settings and import it on another device, the blocklist may not be able to be configured as that in the previous device. You can apply some of the above settings with the `.xml` below (assuming the configuration of Invizible Pro is as in this tutorial) by coping it, storing it in a `.xml` file and going to `Settings` \> `Backup` \> `Import settings` of TrackerControl to import this file. However, it just contains some of the settings, you have to configure others yourself and test whether your applications work as normal because things may vary from case to case.

```
<?xml version='1.0' encoding='UTF-8' standalone='yes' ?>
<trackercontrol>
  <application>
    <setting key="dns2" type="string" value="149.112.112.112" >
    <setting key="filter_udp" type="boolean" value="true" >
    <setting key="domain_based_blocking" type="boolean" value="true" >
    <setting key="dark_theme" type="boolean" value="true" >
    <setting key="dns" type="string" value="9.9.9.9" >
    <setting key="hosts_url_new" type="string" value="https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts" >
    <setting key="wifi_homes" type="set" value="" >
    <setting key="traffic_blocked" type="boolean" value="true" >
    <setting key="hosts_url" type="string" value="https://www.netguard.me/hosts" >
    <setting key="socks5_addr" type="string" value="127.0.0.1" >
    <setting key="socks5_port" type="string" value="9050" >
    <setting key="proto_tcp" type="boolean" value="true" >
    <setting key="manage_system" type="boolean" value="true" >
    <setting key="validate" type="string" value="www.f-droid.org" >
    <setting key="update_check" type="boolean" value="true" >
    <setting key="socks5_enabled" type="boolean" value="true" >
    <setting key="filter" type="boolean" value="true" >
  </application>
  <apply>
    <setting key="com.termux" type="boolean" value="false" >
    <setting key="pan.alexander.tordnscrypt.stable" type="boolean" value="false" >
  </apply>
  <forward>
    <port pkg="nobody" protocol="17" dport="53" raddr="127.0.0.1" rport="5354" >
    <port pkg="nobody" protocol="6" dport="53" raddr="127.0.0.1" rport="5354" >
  </forward>
</trackercontrol>
```

#### Configure InviZible Pro

1. Change to `Proxy mode` by tapping the `⋮` button in the upper right corner and select that option.
2. Go to `Fast settings`.
3. Turn on `Autostart DNSCrypt` and `Autostart Tor` if you want.
4. Set `Delay`, `DNSCrypr servers`, `Bridges`, whether to `Spoof SNI`, etc. if needed.
5. Go to `Common Settings` and turn on `Prevent device sleep` if needed.
6. Go to `DNSCrypt Settings`.
7. Go to `Listen port` and set it to the port TrackerControl forwarding UDP and TCP of port `53` to (`5354` by default).
8. Set `Require DNSSEC`, `Require no log`, and `Require no filter` if you want.
9. Turn on `Force TCP` because Tor doesn’t support UDP.
10. Turn on `SOCKS proxy` \> `Outbound proxy`.
11. Set `Proxy port` as the port you want to configure Tor to use in InviZible Pro (`9050` by default).
12. Turn on `Query logging` and `Suspicious logging` if you want.
13. Go to `Tor settings`.
14. Set `Nodes`, `Proxy`, etc. if you want. Make sure the `SOCKS port` is coordinated with the `SOCKS proxy` in TrackerControl and the `DNS port` is coordinated with the `Forwarding rules` in `DNSCrypt Settings` (`onion 127.0.0.1:5400` by default).
15. Set other things if you want.
16. Turn on `DNSCrypt` and `Tor`.

You can apply some of the above settings with the files below (assuming the configuration of TrackerControl is as in this tutorial). However, they just contain some of the settings, you have to configure others yourself and test whether your applications work as normal because things may vary from case to case.

<ul>
<li><code>dns-proxy.toml</code>: Copy the text in the below block, tap <code>Edit dns-proxy.toml</code> in <code>DNSCrypt Settings</code>, and paste.
<pre><code>ipv4_servers = true
ipv6_servers = true
require_dnssec = true
require_nolog = false
require_nofilter = false
block_ipv6 = false
force_tcp = true
server_names = [&#39;adguard-dns&#39;, &#39;adguard-dns-ipv6&#39;, &#39;ahadns-doh-la&#39;, &#39;brahma-world-ipv6&#39;, &#39;dnsforge.de&#39;, &#39;mullvad-base-doh&#39;, &#39;sfw.scaleway-fr&#39;]
disabled_server_names = []
listen_addresses = [&#39;127.0.0.1:5354&#39;, &#39;[::1]:5354&#39;]
max_clients = 250
#user_name = &#39;0&#39;
dnscrypt_servers = true
doh_servers = true
odoh_servers = true
timeout = 5000
keepalive = 30
netprobe_timeout = -1
log_level = 2
log_file = &#39;/data/user/0/pan.alexander.tordnscrypt.stable/logs/DnsCrypt.log&#39;
use_syslog = false
cert_refresh_delay = 240
dnscrypt_ephemeral_keys = false
tls_disable_session_tickets = false
bootstrap_resolvers = [&#39;9.9.9.9:53&#39;, &#39;[2620:fe::fe]:53&#39;]
netprobe_address = &#39;9.9.9.9:53&#39;
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
forwarding_rules = &#39;forwarding-rules.txt&#39;
cloaking_rules = &#39;cloaking-rules.txt&#39;
proxy = &#39;socks5://127.0.0.1:9050&#39;
[captive_portals]
map_file = &#39;captive-portals.txt&#39;
[dns64]
#prefix = [&#39;64:ff9b::/96&#39;]
[local_doh]
#listen_addresses = [&#39;127.0.0.1:3000&#39;]
#path = &#39;/dns-query&#39;
#cert_file = &#39;localhost.pem&#39;
#cert_key_file = &#39;localhost.pem&#39;
[query_log]
format = &#39;tsv&#39;
file = &#39;/data/user/0/pan.alexander.tordnscrypt.stable/cache/query.log&#39;
ignored_qtypes = [&#39;DNSKEY&#39;, &#39;NS&#39;]
[nx_log]
format = &#39;tsv&#39;
file = &#39;/data/user/0/pan.alexander.tordnscrypt.stable/cache/nx.log&#39;
[blocked_names]
blocked_names_file = &#39;blacklist.txt&#39;
[blocked_ips]
blocked_ips_file = &#39;ip-blacklist.txt&#39;
[allowed_names]
allowed_names_file = &#39;whitelist.txt&#39;
[sources]
[sources.&#39;public-resolvers&#39;]
urls = [&#39;https://raw.githubusercontent.com/DNSCrypt/dnscrypt-resolvers/master/v3/public-resolvers.md&#39;, &#39;https://download.dnscrypt.info/resolvers-list/v3/public-resolvers.md&#39;, &#39;https://ipv6.download.dnscrypt.info/resolvers-list/v3/public-resolvers.md&#39;]
minisign_key = &#39;RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3&#39;
cache_file = &#39;public-resolvers.md&#39;
refresh_delay = 72
prefix = &#39;&#39;
[sources.&#39;relays&#39;]
urls = [&#39;https://raw.githubusercontent.com/DNSCrypt/dnscrypt-resolvers/master/v3/relays.md&#39;, &#39;https://download.dnscrypt.info/resolvers-list/v3/relays.md&#39;, &#39;https://ipv6.download.dnscrypt.info/resolvers-list/v3/relays.md&#39;]
cache_file = &#39;relays.md&#39;
minisign_key = &#39;RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3&#39;
refresh_delay = 72
prefix = &#39;&#39;
[sources.&#39;odoh-servers&#39;]
urls = [&#39;https://raw.githubusercontent.com/DNSCrypt/dnscrypt-resolvers/master/v3/odoh-servers.md&#39;, &#39;https://download.dnscrypt.info/resolvers-list/v3/odoh-servers.md&#39;, &#39;https://ipv6.download.dnscrypt.info/resolvers-list/v3/odoh-servers.md&#39;]
cache_file = &#39;odoh-servers.md&#39;
minisign_key = &#39;RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3&#39;
refresh_delay = 72
prefix = &#39;&#39;
[sources.&#39;odoh-relays&#39;]
urls = [&#39;https://raw.githubusercontent.com/DNSCrypt/dnscrypt-resolvers/master/v3/odoh-relays.md&#39;, &#39;https://download.dnscrypt.info/resolvers-list/v3/odoh-relays.md&#39;, &#39;https://ipv6.download.dnscrypt.info/resolvers-list/v3/odoh-relays.md&#39;]
cache_file = &#39;odoh-relays.md&#39;
minisign_key = &#39;RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3&#39;
refresh_delay = 72
prefix = &#39;&#39;
[broken_implementations]
fragments_blocked = [&#39;cisco&#39;, &#39;cisco-ipv6&#39;, &#39;cisco-familyshield&#39;, &#39;cisco-familyshield-ipv6&#39;, &#39;cleanbrowsing-adult&#39;, &#39;cleanbrowsing-adult-ipv6&#39;, &#39;cleanbrowsing-family&#39;, &#39;cleanbrowsing-family-ipv6&#39;, &#39;cleanbrowsing-security&#39;, &#39;cleanbrowsing-security-ipv6&#39;]
[anonymized_dns]
skip_incompatible = false
routes = [
{ server_name = &#39;adguard-dns&#39;, via=[&#39;anon-kama&#39;, &#39;anon-scaleway&#39;, &#39;anon-tiarap&#39;] },
{ server_name = &#39;sfw.scaleway-fr&#39;, via=[&#39;anon-kama&#39;, &#39;anon-serbica&#39;, &#39;anon-tiarap&#39;] },
{ server_name = &#39;adguard-dns-ipv6&#39;, via=[&#39;anon-ams-ipv6&#39;, &#39;anon-scaleway-ams-ipv6&#39;, &#39;anon-tiarap-ipv6&#39;] }
]
[static]
</code></pre></li>
<li><code>tor.conf</code>: Copy the text in the below block, tap <code>Edit tor.conf</code> in <code>Tor Settings</code>, and paste.
<pre><code>RunAsDaemon 0
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
</code></pre></li>
</ul>

Some services may crash when routing traffic through Tor, changing the `Exit nodes` in InviZible Pro may help; otherwise, you may try to disable monitoring that app or toggle off `Use SOCKS5 proxy` in TrackerControl, which however compromise your privacy to some degree.

### Configure TrackerControl and InviZible Pro for DNSCrypt Only

To use DNSCrypt but not Tor of InviZible Pro with TrackerControl, there are below differences in the configuration compared with both DNSCrypt and Tor in above section.

#### Configure TrackerControl

1. Turn on TrackerControl as the VPN service of the device.
2. Go to TrackerControl.
3. Disable `Monitoring` of InviZible Pro (`pan.alexander.tordnscrypt.stable`).
4. Go to the `Settings` \> `Advanced options`.
5. Turn on `Block Trackers on UDP`.
6. Tap `Port forwarding`.
7. Tap `⊕`. Set `protocol` as `UDP`, `Source port` to `53`, `Destination address` to `127.0.0.1`, `Destination port` to the port you configure DNSCrypt of InviZible pro to listen to (`5354` by default), and `Destination app` to `nobody`.
8. Tap `⊕`. Set `protocol` as `TCP`, `Source port` to `53`, `Destination address` to `127.0.0.1`, `Destination port` to the port you configure DNSCrypt of InviZible pro to listen to (`5354` by default), and `Destination app` to `nobody`.
9. Set first (above)` VPN DNS` as `9.9.9.9`.
10. Set second (below) `VPN DNS` as `149.112.112.112`.
11. Set where to validate the internet connection in `Validate at` if you want, `www.f-droid.org` for example.
12. Block unwanted trackers and set other things if you want.

#### Configure InviZible Pro

1. Change to `Proxy mode` by tapping the `⋮` button in the upper right corner and select that option.
2. Go to `Fast settings`.
3. Turn on `Autostart DNSCrypt` if you want.
4. Set `Delay`, `DNSCrypr servers`, `Bridges`, whether to `Spoof SNI`, etc. if needed.
5. Go to `Common Settings` and turn on `Prevent device sleep` if needed.
6. Go to `DNSCrypt Settings`.
7. Go to `Listen port` and set it to the port TrackerControl forwarding UDP and TCP of port `53` to (`5354` by default).
8. Set `Require DNSSEC`, `Require no log`, and `Require no filter` if you want.
9. Turn on `Force TCP` if you want.
10. Turn on `Query logging` and `Suspicious logging` if you want.
11. Turn on `DNSCrypt`.

### Configure TrackerControl and InviZible Pro for Tor Only

To use Tor but not DNSCrypr of InviZible Pro with TrackerControl, there are below differences in the configuration compared with both DNSCrypt and Tor in above section.

#### Configure TrackerControl

1. Turn on TrackerControl as the VPN service of the device.
2. Go to TrackerControl.
3. Disable `Monitoring` of InviZible Pro (`pan.alexander.tordnscrypt.stable`).
4. Go to the `Settings` \> `Advanced options`.
5. Turn on `Block Trackers on UDP`.
6. Set the `SOCKS5 address` to `127.0.0.1`.
7. Set the `SOCKS port` to the port you’ve configured Tor to use in InviZible Pro (`9050` by default).
8. Enable the `Use SOCKS5 proxy` option.
9. Tap `Port forwarding`.
10. Tap `⊕`. Set `protocol` as `UDP`, `Source port` to `53`, `Destination address` to `127.0.0.1`, `Destination port` to the `Forwarding rules` in `DNSCrypt Settings` of InviZible Pro (`5400` by default), and `Destination app` to `nobody`.
11. Tap `⊕`. Set `protocol` as `TCP`, `Source port` to `53`, `Destination address` to `127.0.0.1`, `Destination port` to the `Forwarding rules` in `DNSCrypt Settings` of InviZible Pro (`5400` by default), and `Destination app` to `nobody`.
12. Set first (above)` VPN DNS` as `9.9.9.9`.
13. Set second (below) `VPN DNS` as `149.112.112.112`.
14. Set where to validate the internet connection in `Validate at` if you want, `www.f-droid.org` for example.
15. Block unwanted trackers and set other things if you want.

#### Configure InviZible Pro

1. Change to `Proxy mode` by tapping the `⋮` button in the upper right corner and select that option.
2. Go to `Fast settings`.
3. Turn on `Autostart Tor` if you want.
4. Set `Delay`, `DNSCrypr servers`, `Bridges`, whether to `Spoof SNI`, etc. if needed.
5. Go to `Common Settings` and turn on `Prevent device sleep` if needed.
6. Go to `Tor settings`.
7. Set `Nodes`, `Proxy`, etc. if you want. Make sure the `SOCKS port` is coordinated with the `SOCKS proxy` in TrackerControl and the `DNS port` is coordinated with the `Port forwarding` rules in TrackerControl.
8. Set other things if you want.
9. Turn on `Tor`.

### Check Whether the Tor Route Setup Is Successful

* Go to <https://check.torproject.org> to check if your Tor route succeeded. If yes, you will see "Congratulations. This browser is configured to use Tor." or similar massage in other languages.
* Go to <https://whatismyipaddress.com> (not open source), <https://ipcheck.ing>, or other IP checking websites to see wether it’s your device’s IP. If not, your Tor route is probably successful.
* Go to <https://www.dnsleaktest.com> (not open source), <https://ipcheck.ing>, or other DNS leak testing websites to check if there is a DNS leak. You will see the DNS servers you set in DNSCrypt Settings in InviZible Pro instead of your ISP’s servers if there’s no DNS leak.

### Configure InviZible Pro to Block Trackers without TrackerControl

* Change to `VPN mode` by tapping the `⋮` button in the upper right corner and select that option.
* Settings for DNSCRypt and Tor, DNSCrypr only, and Tor only remain the same as the above counterparts that is used with TrackerControl except that those parts coordinated with `Port forwarding` of TrackerControl are no longer needed.

---

## OpenSSH: Secure Remote Access with SSH, SCP, and SFTP

### Introduction of SSH (Secure Shell) and OpenSSH

* SSH provides a secure way for accessing remote hosts and replaces tools such as telnet, rlogin, rsh, ftp.
* OpenSSH, also known as OpenBSD Secure Shell, is a suite of secure networking utilities based on the Secure Shell (SSH) protocol, which provides a secure channel over an unsecured network in a client–server architecture.
* Default SSH port in Termux is `8022`.
* Default SSH port in Linux is usually `22`.

### OpenSSH Server

#### Install in Debian Derivatives

```
sudo apt install openssh-server
```

#### Install in Termux

```
pkg install openssh
```

#### Edit Configuration

```
sudo nano /etc/ssh/sshd_config
```

##### Listening Port

Edit

```
#Port 22
```

line to change the listening port.

Note that you may need to set it to higher port in VMs.

##### Ports Listening to

Edit

```
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::
```

lines to change ports listening to.

##### PermitRootLogin

Change the `PermitRootLogin` line to

```
PermitRootLogin yes
```

if you want to permit login as root. In Termux, this is common, but in normal Linux, this is not discouraged.

##### PasswordAuthentication

Change the `PasswordAuthentication` line to

```
PasswordAuthentication yes
```

to permit password authentication. Password can be set by running `passwd`.

#### Usage in Linux with Systemctl

```
sudo systemctl start ssh
sudo systemctl enable ssh
sudo systemctl restart ssh
sudo systemctl status ssh
sudo systemctl disable ssh
```

#### Usage in Termux

##### Start

```
sshd
```

##### Stop

```
pkill sshd
```

#### Deny

```
nano /etc/hosts .deny
```

#### Ubuntu Firewall

```
sudo ufw enable
sudo ufw allow ssh
```

### OpenSSH Client

#### Install in Debian Derivatives

```
sudo apt install openssh-client
```

#### Install in Termux

```
pkg install openssh
```

#### Connect

```
ssh [user]@[ssh_server] -p [port] -L [local_port]:[remote_host]:[remote_port]
```

* `-p`: Port. Default is 22.
* `-L`: Local port forwarding.

#### Key

```
ssh-keygen -R [localhost]:2222
```

You need to delete the original key if the server is reset.

If you’re using password authentication, you won’t need to generate key.

### SCP (Secure Copy Protocol)

SCP is a simple command-line tool for securely copying files between local and remote systems based on the `rcp` (remote copy) command but uses SSH for security. It is faster but less flexible than SFTP.

You can use `scp` on the client side to transfer files between the server side and the client side.

The syntax of `scp` is generally the same as that of `cp`, but with the `<user@remote>:` added before the path from the server and optional `-P <port>` to specify the port. For example:

```
scp -r root@localhost:/root/Desktop /data/data/com.termux/files/home -P 22
```

### SFTP (Secure File Transfer Protocol)

SFTP is a full-fledged file transfer protocol that runs over SSH. This makes it more secure than traditional FTP (File Transfer Protocol). SFTP allows for various file management operations, such as listing, renaming, deleting directories and files, and changing directories.

The syntax of `sftp`, which connects to the server from the client, is generally the same as that of `ssh`. For example:

```
sftp -p 2222 user@example.com
```

You can also connect to the sftp server from other clients. One recommended file manager for Android which can connect to sftp server is [Material Files](https://play.google.com/store/apps/details?id=me.zhanghai.android.files). My tutorial for it is available in [Material File: Linux-Aware File Manager with FTP, SFTP, SMB and WebDAV Support](#material-file-linux-aware-file-manager-with-ftp-sftp-smb-and-webdav-support).

### Further Readings and References about OpenSSH with Linux and Termux

* <https://www.openssh.com>.
* <https://ivonblog.com/posts/termux-qemu-system-linux>.
* <https://wiki.termux.com/wiki/Remote%5FAccess>.
* <https://ivonblog.com/posts/termux-openssh>.

---

## OpenSSL: SSL and TLS Protocals and Cryptography Library Implementation

### Introduction of OpenSSL

OpenSSL is an open-source library that provides a comprehensive suite of cryptographic tools for securing communications over computer networks. It implements the Secure Sockets Layer (SSL) and Transport Layer Security (TLS) protocols and includes a general-purpose cryptographic library that supports a variety of encryption algorithms, hashing functions, digital signatures, key generation, certificate management, and secure random number generation.

### Install OpenSSL in Termux

```
pkg install openssl openssl-tool
```

### Install of OpenSSL in Debian Derivatives

```
sudo apt install openssl libssl-dev
```

### RSA (Rivest-Shamir-Adleman)

#### Introduction of RSA

RSA is a widely used asymmetric encryption algorithm that underpins many security protocols. Its strength lies in the difficulty of factoring large prime numbers. The algorithm involves key generation, encryption, and decryption processes utilizing a pair of keys: a public key, shared openly, and a private key, kept secret.

1. Key Generation: The algorithm begins by selecting two large prime numbers. The totient function, equal to the product of the decrements of the two large prime numbers by one, is computed. A public exponent, typically 65537, is chosen, which is coprime to the totient function of the product of the two large prime numbers. The public key is the array of the product of the two large prime numbers and the public exponent. The private exponent is calculated such that the product of the public exponent and the private exponent is congruent to 1 modulo the totient function of the product of the two large prime numbers. The private key is the array of the product of the two large prime numbers and the private exponent. RSA’s security relies on the ease of multiplying primes and the difficulty of factoring their product.
2. Public Encryption and Private Decryption (Communication): After generating the keys, RSA can be used for secure communication. To encrypt a message, which should be less than the product of the two large prime numbers, the sender uses the recipient’s public key with the formula that the ciphertext equals the message to the power of the public exponent modulo the product of the two large prime numbers. Only the intended recipient, with the private key, can decrypt it using the formula that the message equals the cyphertext to the power of the private exponent modulo the product of the two large prime numbers.
3. Private Encryption and Public Decryption (Signature): RSA can also create digital signatures for authenticity and non-repudiation. The sender encrypts a hash of the message with their private key with the formula that the signature equals the hash to the power of the private exponent modulo the product of the two large prime numbers. The signature is sent accompanying the original message. The recipient verifies the signature by decrypting it with the sender’s public key with the formula that the hash equals the signature to the power of the public exponent modulo the product of the two large prime numbers. If hash obtained from the formula matches the hash of the received message, it confirms the message’s authenticity.

Applications:

* RSA is employed in various applications that require secure communication and data integrity:
* Secure Web Communications (HTTPS): RSA is commonly used in SSL/TLS protocols to establish secure connections between web browsers and servers.
* Email Encryption: Services like PGP (Pretty Good Privacy) use RSA for encrypting emails, ensuring only intended recipients can read them.
* Digital Signatures: RSA is used to sign software and documents, verifying the identity of the sender and ensuring the content hasn’t been altered.
* Secure Key Exchange: RSA can facilitate the secure exchange of symmetric keys for faster encryption methods, allowing secure communication without the need for shared secrets.

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

#### All Command Options of Pkeyutl from Official Doc

```
openssl pkeyutl [-help] [-in file] [-rawin] [-digest algorithm] [-out file] [-sigfile file] [-inkey filename|uri] [-keyform DER|PEM|P12|ENGINE] [-passin arg] [-peerkey file] [-peerform DER|PEM|P12|ENGINE] [-pubin] [-certin] [-rev] [-sign] [-verify] [-verifyrecover] [-encrypt] [-decrypt] [-derive] [-kdf algorithm] [-kdflen length] [-pkeyopt opt:value] [-pkeyopt_passin opt[:passarg]] [-hexdump] [-asn1parse] [-engine id] [-engine_impl] [-rand files] [-writerand file] [-provider name] [-provider-path path] [-propquery propq] [-config configfile]
```

DESCRIPTION: This command can be used to perform low-level public key operations using any supported algorithm.

OPTIONS:

* `-help`: Print out a usage message.
* `-in filename`: This specifies the input filename to read data from or standard input if this option is not specified.
* `-rawin`: This indicates that the input data is raw data, which is not hashed by any message digest algorithm. The user can specify a digest algorithm by using the `-digest` option. This option can only be used with `-sign` and `-verify` and must be used with the Ed25519 and Ed448 algorithms.
* `-digest algorithm`: This specifies the digest algorithm which is used to hash the input data before signing or verifying it with the input key. This option could be omitted if the signature algorithm does not require one (for instance, EdDSA). If this option is omitted but the signature algorithm requires one, a default value will be used. For signature algorithms like RSA, DSA and ECDSA, SHA-256 will be the default digest algorithm. For SM2, it will be SM3\. If this option is present, then the `-rawin` option must be also specified.
* `-out filename`: Specifies the output filename to write to or standard output by default.
* `-sigfile file`: Signature file, required for `-verify` operations only.
* `-inkey filename|uri`: The input key, by default it should be a private key.
* `-keyform DER|PEM|P12|ENGINE`: The key format; unspecified by default. See openssl-format-options (1) for details.
* `-passin arg`: The input key password source. For more information about the format of arg see openssl-passphrase-options (1).
* `-peerkey file`: The peer key file, used by key derivation (agreement) operations.
* `-peerform DER|PEM|P12|ENGINE`: The peer key format; unspecified by default. See openssl-format-options (1) for details.
* `-pubin`: By default a private key is read from the key input. With this option a public key is read instead. If the input contains no public key but a private key, its public part is used.
* `-certin`: The input is a certificate containing a public key.
* `-rev`: Reverse the order of the input buffer. This is useful for some libraries (such as CryptoAPI) which represent the buffer in little endian format.
* `-sigfile file`: Signature file, required for `-verify` operations only.
* `-inkey filename|uri`: The input key, by default it should be a private key.
* `-keyform DER|PEM|P12|ENGINE`: The key format; unspecified by default. See openssl-format-options (1) for details.
* `-passin arg`: The input key password source. For more information about the format of arg see openssl-passphrase-options (1).
* `-peerkey file`: The peer key file, used by key derivation (agreement) operations.
* `-peerform DER|PEM|P12|ENGINE`: The peer key format; unspecified by default. See openssl-format-options (1) for details.
* `-pubin`: By default a private key is read from the key input. With this option a public key is read instead. If the input contains no public key but a private key, its public part is used.
* `-certin`: The input is a certificate containing a public key.
* `-rev`: Reverse the order of the input buffer. This is useful for some libraries (such as CryptoAPI) which represent the buffer in little endian format.
* `-sign`: Sign the input data (which must be a hash) and output the signed result. This requires a private key.
* `-verify`: Verify the input data (which must be a hash) against the signature file and indicate if the verification succeeded or failed.
* `-verifyrecover`: Verify the input data (which must be a hash) and output the recovered data.
* `-encrypt`: Encrypt the input data using a public key.
* `-decrypt`: Decrypt the input data using a private key.
* `-derive`: Derive a shared secret using the peer key.
* `-kdf algorithm`: Use key derivation function algorithm. The supported algorithms are at present TLS1-PRF and HKDF. Note: additional parameters and the KDF output length will normally have to be set for this to work. See EVP\_PKEY\_CTX\_set\_hkdf\_md (3) and EVP\_PKEY\_CTX\_set\_tls1\_prf\_md (3) for the supported string parameters of each algorithm.
* `-kdflen length`: Set the output length for KDF.
* `-pkeyopt opt:value`: Public key options specified as `opt:value`. See NOTES below for more details.
* `-pkeyopt_passin opt[:passarg]`: Allows reading a public key option opt from stdin or a password source. If only opt is specified, the user will be prompted to enter a password on stdin. Alternatively, passarg can be specified which can be any value supported by openssl-passphrase-options (1).
* `-hexdump`: hex dump the output data.
* `-asn1parse`: Parse the ASN.1 output data, this is useful when combined with the `-verifyrecover` option when an ASN1 structure is signed.
* `-engine id`: See "Engine Options" in openssl (1). This option is deprecated.
* `-engine_impl`: When used with the `-engine` option, it specifies to also use engine id for crypto operations.
* `-rand files`, `-writerand file`: See "Random State Options" in openssl (1) for details.
* `-provider name`: See "Provider Options" in openssl (1), provider (7), and property (7).
* `-provider-path path`: See "Provider Options" in openssl (1), provider (7), and property (7).
* `-propquery propq`: See "Provider Options" in openssl (1), provider (7), and property (7).
* `-config configfile`: See "Configuration Option" in openssl (1).

### Symmetric Encryption

#### Introduction of Symmetric Encryption

Symmetric encryption uses the same key for both encryption and decryption, requiring both parties to possess and keep the key confidential.

Features:

* Single Key: Both parties use the same key, making key management critical. If the key is compromised, the encrypted data is at risk.
* Speed: Symmetric algorithms are faster than asymmetric ones, making them ideal for encrypting large amounts of data, particularly in real-time applications.
* Confidentiality: Only authorized parties with the correct key can decrypt the data, maintaining its confidentiality.

Common Algorithms:

* AES: Secure and efficient, with key sizes of 128, 192, or 256 bits.
* DES: Uses a 56-bit key; now considered insecure.
* 3DES: Applies DES three times with different keys but slower than AES.
* Blowfish: A fast cipher with key lengths of 32 to 448 bits.
* Twofish: A more advanced version of Blowfish, supporting keys up to 256 bits.
* RC4: A stream cipher known for speed but now insecure in many uses.

Applications:

* Data Encryption: Secures data in storage and transmission (e.g., SSL/TLS).
* VPNs: Encrypts data over public networks to protect privacy.
* Disk Encryption: Protects data on devices, ensuring confidentiality if lost or stolen.
* Secure Communications: Used in messaging apps and secure protocols.
* Cloud Storage Security: Encrypts data in the cloud, protecting it from unauthorized access.

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

DESCRIPTION: The symmetric cipher commands allow data to be encrypted or decrypted using various block and stream ciphers using keys based on passwords or explicitly provided. Base64 encoding or decoding can also be performed either by itself or in addition to the encryption or decryption.

OPTIONS:

* `-help`: Print out a usage message.
* `-list`: List all supported ciphers.
* `-ciphers`: Alias of `-list` to display all supported ciphers.
* `-in filename`: The input filename, standard input by default.
* `-out filename`: The output filename, standard output by default.
* `-pass arg`: The password source. For more information about the format of arg see "Pass Phrase Options" in openssl (1).
* `-e`: Encrypt the input data. This is the default.
* `-d`: Decrypt the input data.
* `-a`: Base64 process the data. This means that if encryption is taking place the data is base64 encoded after encryption. If decryption is set then the input data is base64 decoded before being decrypted.
* `-base64`: Same as `-a`.
* `-A`: If the `-a` option is set then base64 process the data on one line.
* `-k password`: The password to derive the key from. This is for compatibility with previous versions of OpenSSL. Superseded by the `-pass` argument.
* `-kfile filename`: Read the password to derive the key from the first line of filename. This is for compatibility with previous versions of OpenSSL. Superseded by the `-pass` argument.
* `-md digest`: Use the specified digest to create the key from the passphrase. The default algorithm is sha-256.
* `-iter count`: Use a given number of iterations on the password in deriving the encryption key. High values increase the time required to brute-force the resulting file. This option enables the use of PBKDF2 algorithm to derive the key.
* `-pbkdf2`: Use PBKDF2 algorithm with a default iteration count of 10000 unless otherwise specified by the `-iter` command line option.
* `-saltlen`: Set the salt length to use when using the `-pbkdf2` option. For compatibility reasons, the default is 8 bytes. The maximum value is currently 16 bytes. If the `-pbkdf2` option is not used, then this option is ignored and a fixed salt length of 8 is used. The salt length used when encrypting must also be used when decrypting.
* `-nosalt`: Don’t use a salt in the key derivation routines. This option SHOULD NOT be used except for test purposes or compatibility with ancient versions of OpenSSL.
* `-z`: Compress or decompress encrypted data using zlib after encryption or before decryption. This option exists only if OpenSSL was compiled with the zlib or zlib-dynamic option.
* `-none`: Use NULL cipher (no encryption or decryption of input).
* `-rand files`, `-writerand file`: See "Random State Options" in openssl (1) for details.
* `-provider name`: See "Provider Options" in openssl (1), provider (7), and property (7).
* `-provider-path path`: See "Provider Options" in openssl (1), provider (7), and property (7).
* `-propquery propq`: See "Provider Options" in openssl (1), provider (7), and property (7).
* `-engine id`: See "Engine Options" in openssl (1). This option is deprecated.

Supported ciphers:

* aes-128-cbc
* aes-128-cfb
* aes-128-cfb1
* aes-128-cfb8
* aes-128-ctr
* aes-128-ecb
* aes-128-ofb
* aes-192-cbc
* aes-192-cfb
* aes-192-cfb1
* aes-192-cfb8
* aes-192-ctr
* aes-192-ecb
* aes-192-ofb
* aes-256-cbc
* aes-256-cfb
* aes-256-cfb1
* aes-256-cfb8
* aes-256-ctr
* aes-256-ecb
* aes-256-ofb
* aes128
* aes128-wrap
* aes128-wrap-pad
* aes192
* aes192-wrap
* aes192-wrap-pad
* aes256
* aes256-wrap
* aes256-wrap-pad
* aria-128-cbc
* aria-128-cfb
* aria-128-cfb1
* aria-128-cfb8
* aria-128-ctr
* aria-128-ecb
* aria-128-ofb
* aria-192-cbc
* aria-192-cfb
* aria-192-cfb1
* aria-192-cfb8
* aria-192-ctr
* aria-192-ecb
* aria-192-ofb
* aria-256-cbc
* aria-256-cfb
* aria-256-cfb1
* aria-256-cfb8
* aria-256-ctr
* aria-256-ecb
* aria-256-ofb
* aria128
* aria192
* aria256
* bf
* bf-cbc
* bf-cfb
* bf-ecb
* bf-ofb
* blowfish
* camellia-128-cbc
* camellia-128-cfb
* camellia-128-cfb1
* camellia-128-cfb8
* camellia-128-ctr
* camellia-128-ecb
* camellia-128-ofb
* camellia-192-cbc
* camellia-192-cfb
* camellia-192-cfb1
* camellia-192-cfb8
* camellia-192-ctr
* camellia-192-ecb
* camellia-192-ofb
* camellia-256-cbc
* camellia-256-cfb
* camellia-256-cfb1
* camellia-256-cfb8
* camellia-256-ctr
* camellia-256-ecb
* camellia-256-ofb
* camellia128
* camellia192
* camellia256
* cast
* cast-cbc
* cast5-cbc
* cast5-cfb
* cast5-ecb
* cast5-ofb
* chacha20
* des
* des-cbc
* des-cfb
* des-cfb1
* des-cfb8
* des-ecb
* des-ede
* des-ede-cbc
* des-ede-cfb
* des-ede-ecb
* des-ede-ofb
* des-ede3
* des-ede3-cbc
* des-ede3-cfb
* des-ede3-cfb1
* des-ede3-cfb8
* des-ede3-ecb
* des-ede3-ofb
* des-ofb
* des3
* des3-wrap
* desx
* desx-cbc
* id-aes128-wrap
* id-aes128-wrap-pad
* id-aes192-wrap
* id-aes192-wrap-pad
* id-aes256-wrap
* id-aes256-wrap-pad
* id-smime-alg-CMS3DESwrap
* idea
* idea-cbc
* idea-cfb
* idea-ecb
* idea-ofb
* rc2
* rc2-128
* rc2-40
* rc2-40-cbc
* rc2-64
* rc2-64-cbc
* rc2-cbc
* rc2-cfb
* rc2-ecb
* rc2-ofb
* rc4
* rc4-40
* seed
* seed-cbc
* seed-cfb
* seed-ecb
* seed-ofb
* sm4
* sm4-cbc
* sm4-cfb
* sm4-ctr
* sm4-ecb
* sm4-ofb

---

## droidVNC-NG: VNC Server App for Android That Does Not Require Root Privileges

### Install droidVNC-NG

droidVNC-NG (`net.christianbeier.droidvnc_ng`) can be installed from [F-Droid](https://f-droid.org/packages/net.christianbeier.droidvnc%5Fng) or [Google Play](https://play.google.com/store/apps/details?id=net.christianbeier.droidvnc%5Fng).

### Introduction of droidVNC-NG

Remote Control & Interaction

* Screen Sharing: Share your device’s screen over the network, with optional scaling on the server side for better performance.
* Remote Control: Use your VNC client to control your device, including mouse and basic keyboard input. To enable this, you must activate the Accessibility API Service on your device.
* Special Key Functions: Remotely trigger key functions like Recent apps, Home button, and Back button.
* Text Copy & Paste: Support for copying and pasting text from your device to the VNC client. Note: Copying text from the client to the device isn’t supported due to Android security restrictions.
* Multiple Mouse Pointers: Display different mouse pointers for each connected client on your device.

Comfort Features

* Web Browser Access: Control your device’s shared screen directly from a web browser, without needing a separate VNC client.
* Auto-Discovery: Advertise the VNC server using Zeroconf/Bonjour for easy discovery by native clients.

Security & Configuration

* Password Protection: Protect your VNC connection with a password.
* Custom Port Settings: Choose which port the VNC server uses for connections.
* Startup on Boot: Automatically start the VNC service when your device boots up.
* Default Configuration: Load a default configuration from a JSON file.

Advanced VNC Features

* Reverse VNC: Allow your device to initiate the VNC connection to a client.
* Repeater Support: Connect to a repeater that supports UltraVNC-style Mode-2 for more flexible networking.

---

## SD Maid SE: A File Management Tool and System Cleaner

### Install SD Maid SE

SD Maid SE (`eu.darken.sdmse`) can be installed from [F-Droid](https://f-droid.org/packages/eu.darken.sdmse) or [Google Play](https://play.google.com/store/apps/details?id=eu.darken.sdmse).

### Introduction of SD Maid SE

SD Maid SE (also known as SD Maid 2 or SD Maid 2/SE) is a file management tool and system cleaner for Android that specializes in maintenance, freeing up space, and removing unwanted data.

Features include:

* `CorpseFinder` \- Removing data that belongs to apps that are no longer installed
* `SystemCleaner`: User configurable filters for random files
* `AppControl` \- Controling/disabling apps
* `StorageAnalyzer` \- Storage overview
* Root and Shizuku support

### Use SD Maid SE with Shizuku

* Setup Shizuku. For people who are new to it, please refer to [Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell](#shizuku-systemui-tuner-and-ashell-use-local-adb-of-android-device-on-terminals-such-as-termux-without-another-device-with-shizuku-leave-developer-options-off-when-doing-so-with-systemui-tuner-and-use-adb-with-features-like-autocomplete-suggestion-with-ashell). The part about using SystemUI Tuner to enable ADB persistently in order to keep Shizuku running when Developer Options is turned off isn’t necessary here but recommended if you want to keep SD Maid SE using Shizuku.
* Give consent for SD Maid SE to use Shizuku inside SD Maid SE, you can use it to enable/disable SD Maid SE’s use of Shizuku.
* After giving consent, a Grant access dialog from Shizuku should show.
* Confirm the dialog.
* SD Maid SE should display a new status indicator that show whether SD Maid SE can connect to the Shizuku service.

---

## Phyphox: Perform Physics Experiments with Your Phone

### Install Phyphox

Phyphox (`de.rwth_aachen.phyphox`) can be installed from [F-Droid](https://f-droid.org/packages/de.rwth\_aachen.phyphox) or [Google Play](https://play.google.com/store/apps/details?id=de.rwth\_aachen.phyphox).

**WARNING**: Please be careful not to damage your phone while experimenting. Please take special care to avoid dropping it on hard surfaces and do not expose it to excessive magnetic fields. The authors of phyphox are not responsible for any damage to your phone.

### Introduction of Phyphox

* Access to the sensors of your phone either directly or through ready-to-play experiments.A selection of pre-defined experiments is provided. Just press play to start.
* Export your data to CSV (Comma separated values), TSV (Tab-separated values), or Excel.
* Remote-control your experiment through a web interface from any PC on the same network as your phone. No need to install anything on those PCs - all you need is a modern web browser.
* Define your own experiments by selecting sensor inputs, defining analysis steps, and creating views as an interface using our web-editor (<http://phyphox.org/editor>). The analysis can consists of just adding two values or using advanced methods like Fourier transforms and crosscorrelation. We offer a whole toolbox of analysis functions.

Supported sensors:

* Acceleration
* Gyroscope (rotation rate)
* Light
* Location (GPS)
* Magnetometer
* Pressure
* Audio Amplitude
* Audio Autocorrelation
* Audio Scope
* Audio Spectrum
* Doppler effect
* Frequency history
* Sonar
* Tone generator
* Applause meter
* Elevator
* (In)elastic collision
* Centripetal acceleration
* Pendulum
* Roll
* Spring
* Acoustic Stopwatch
* Motion Stopwatch
* Optical Stopwatch
* Proximity Stopwatch
* Acceleration Spectrum
* Depth sensor (LiDAR / ToF)
* Inclination
* Magnetic Spectrum
* Magnetic ruler

Go to [their official website](http://phyphox.org) for more information.

---

## AndroidIDE: IDE for Android App development on Android devices

### Install AndroidIDE

AndroidIDE (`com.itsaky.androidide`) can be installed from [F-Droid archive repository](https://apt.izzysoft.de/fdroid/index/apk/com.itsaky.androidide?repo=archive) or the .apk asset corresponding to your architecture in [its GitHub](https://github.com/AndroidIDEOfficial/AndroidIDE) release.

Note that this project is not maintained anymore.

### Introduction of AndroidIDE

The main goal is to bring support for building Gradle-based Android projects on Android devices itself.

* Gradle Support: Stay ahead of the curve by building your projects with the newest and most advanced Gradle build system.
* JDK 17 & 21 support.
* Code Editor: Upgrade your coding game with our IDE's smart code editor that offers code completions, actions, and analysis to help you write better code quickly.
* Studio Project Support: Effortlessly build Android Studio projects in AndroidIDE without any modifications.
* Terminal: Seamlessly access a full Linux environment with AndroidIDE's built-in terminal, based on the powerful Termux project, with limited packages.
* SDK Manager.
* Log reader \- Real-time display of your app's logs.
* AAB Support: Export it as AAB files.
* API Information \- Provides information on classes and their members, including details on since, removed, and deprecated elements.
* Java language support.
* XML language support.
* UI Designer.
* Git support.
* A basic installation (Android SDK, JDK, etc) is needed before you can start working with projects.
* Documentation: Read the documentation at <https://docs.androidide.com> for more details.

Go to [their official website](https://androidide.com) for more information.

---

## Linux Command Library

### Install Linux Command Library (Optional)

Linux Command Library app can be installed from [F-Droid](https://f-droid.org/packages/com.inspiredandroid.linuxcommandbibliotheca) or [Google Play](https://play.google.com/store/apps/details?id=com.inspiredandroid.linuxcommandbibliotheca).

### Introduction of Linux Command Library

Linux Command Library has 6056 manual pages, 22+ basic categories and a bunch of general terminal tips about Linux (retrieved Sep. 27, 2024). The app works completely offline.

### Website Version of Linux Command Library

There is a website version of Linux Command Library: <https://linuxcommandlibrary.com>.

---

## Material File: Linux-Aware File Manager with FTP, SFTP, SMB and WebDAV Support

### Install Material Files

Material Files (`me.zhanghai.android.files`) can be installed from [F-Droid](https://f-droid.org/packages/me.zhanghai.android.files) or [Google Play](https://play.google.com/store/apps/details?id=me.zhanghai.android.files).

### Introduction of Material Files

* Open source: Lightweight, clean and secure.
* Material Design: Follows Material Design guidelines, with attention into details.
* Breadcrumbs: Navigate in the filesystem with ease.
* Root support: View and manage files with root access.
* Archive support: View, extract and create common compressed files.
* NAS (Network-Attached Storage) support: View and manage files on FTP, SFTP, SMB and WebDAV servers.
* Themes: Customizable UI colors, plus night mode with optional true black.
* Linux-aware: Knows symbolic links, file permissions and SELinux context.
* Robust: Uses Linux system calls under the hood, not yet another ls parser.
* Well-implemented: Built upon the right things, including Java NIO2 File API and LiveData.

### Mount External Storage or NAS (Network-Attached Storage) Server

1. Pull out the left sidebar.
2. Tap `Add storage…`.
3. Tap the option you want.
4. For external storage such as Termux home folder ($HOME), select it from Storage Access Framework (SAF).
5. For NAS server, input necessary information such as `Hostname`, `Port`, and `Path`. Leave `Path` empty to mount the whole file system of the server side.

---

## PipePipe: A FLOSS Android App to Let You Browse YouTube, NicoNico and BiliBili Freely.

### Install PipePipe

PipePipe (`InfinityLoop1309.NewPipeEnhanced`) can be installed from [F-Droid](https://f-droid.org/packages/InfinityLoop1309.NewPipeEnhanced) or the .apk asset corresponding to your architecture in [its GitHub](https://github.com/InfinityLoop1308/PipePipe) release.

Note that because YouTube is trying to block third-party clients, especially for anonymous access, PipePipe sometimes has to be updated frequently to address issues that arise. You can receive the latest update from GitHub release without waiting for F-Droid update building process.

### Introduction of PipePipe

* Browse YouTube, YouTube Music, BiliBili, NicoNico, SoundCloud, media.ccc.de, FramaTube, and Bandcamp.
* Watch videos at different resolutions up to 4K.
* Watch live streams.
* Show or hide subtitles.
* Search videos, audios, channels, playlists, etc. with language, channel, etc. filters.
* Enqueue videos.
* Comments page, Related items page, and Description page.
* Search videos, audios, channels, playlists, albums, etc.
* Subscribe to channels without or with account logged in.
* Get notifications about new videos from channels you’re subscribed to.
* Create, edit, search, and sort channel groups.
* Browse feeds generated from your channel groups.
* Save or don’t save history.
* Search and watch playlists.
* Create and edit local playlists.
* Download videos, audios, subtitles etc. with different format and quality.
* Login to watch restricted and premium contents.
* SponsorBlock and ReturnYouTubeDislike.
* Bullet comments and Live Chats.
* Filter out unwanted items by keywords, channels, etc.
* Music player mode, Background playing, and Popup mode (floating player, aka Picture-in-Picture).
* Sleep timer.
* Configurable fullscreen, volume, and brightness gestures.
* Auto-translation captions.
* Open in browser.
* Feeds in normal mode or fast mode.

---

## Xtra: Twitch Player and Browser

### Install Xtra

Xtra (`com.github.andreyasadchy.xtra`) can be installed from [F-Droid](https://f-droid.org/packages/com.github.andreyasadchy.xtra).

### Introduction of Xtra

Xtra for Twitch is a Twitch client providing the viewing and chatting experience on mobile devices:

* Uses TTV.lol API which is not libre and leaks your Twitch user ID and personal IP to their Russian proxy.
* Support for popular emotes with BetterTTV and FrankerFaceZ plugins.
* Watch VODs and clips with chat replay.
* Download VODs to watch offline.
* Continue watching outside of the app with Picture-in-Picture mode.
* Sleep timer to stop the stream automatically.
* Customizable interface with 3 different color themes.

---

## Material Photo Widget

### Install Material Photo Widget

Material Photo Widget (`com.fibelatti.photowidget`) can be installed from [IzzyOnDroid F-Droid repository](https://apt.izzysoft.de/fdroid/index/apk/com.fibelatti.photowidget).

### Introduction of Material Photo Widget

* 5 aspect ratios: square, tall, wide, original and fill widget.
* Customize your square widgets with 10 different shapes.
* Customize the rounded corners of your tall, wide or original widgets.
* Customize the opacity, offset and padding.
* Choose each photo or sync the widget with device folders.
* Set an optional interval and have photos flip automatically.
* Choose the tap action of each widget: none, view next photo, view in full screen, open another app, or open a link.

---

## LibreOffice Viewer: Viewer for Open Document Formats and Microsoft Office Formats

LibreOffice Viewer (`org.documentfoundation.libreoffice`) can be installed from [F-Droid](https://f-droid.org/packages/org.documentfoundation.libreoffice) or [Google Play](https://play.google.com/store/apps/details?id=org.documentfoundation.libreoffice).

### Introduction of LibreOffice

* LibreOffice is a powerful, free and private office suite - the successor project to OpenOffice - used by millions of people around the world and backed by a non-profit organisation, The Document Foundation.
* LibreOffice includes:
  * Writer (word processing)
  * Calc (spreadsheets)
  * Impress (presentations)
  * Draw (vector graphics and flowcharts)
  * Base (databases)
  * Math (formula editing).
* LibreOffice can write the following format:
  * Microsoft, Microsoft 365, Microsoft Office Open XML, Word, Excel, PowerPoint, Publisher
  (.doc, .docx, .dot, .xls, .xlsx, .xlt, .xlw, .ppt, .pptx, .pps, .pot, .xml)
  * OpenDocument Format Text, Presentation, Spreadsheet, Graphics (.odf, .odt, .fodt, .odp, .fodp, .ods, .fods, .odg, .fodg)
  * BMP file format (.bmp)
  * Comma-separated values (.csv, .txt)
  * Data Interchange Format (.dif)
  * DBase, Clipper, VP-Info, FoxPro (.dbf)
  * DocBook (.xm)
  * Encapsulated PostScript (.eps)
  * Enhanced Metafile (.emf)
  * Graphics Interchange Format (.gif)
  * HTML (.html, .htm)
  * JPEG (.jpeg, .jpg)
  * Macintosh Picture File (.pct)
  * MathML (.mml)
  * MET (.met)
  * Microsoft RTF (.rtf)
  * Netpbm format (.pgm, .pbm, .ppm)
  * Open Office Base (.odb)
  * OpenOffice.org XML (.sxw, .stw, .sxc, .stc, .sxi, .sti, .sxd, .std, .sxm)
  * Plain text (.txt)
  * Portable Document Format (.pdf)
  * Portable Network Graphics (.png)
  * Scalable vector graphics (.svg)
  * SunOS Raster (.ras)
  * SVM (.svm)
  * SYLK (.slk)
  * Tag Image File Format (.tif, .tiff)
  * Unified Office Format (.uof, .uot, .uos, .uop)
  * Windows Metafile (.wmf)
  * X PixMap (.xpm)
* Available on Linux, Windows, and macOS.

Go to [their official website](https://www.libreoffice.org) for more information

### Introduction of LibreOffice Viewer

Simplified form of LibreOffice that only supports viewing but not writing documents, available on Android and iOS.

---

## VLC for Android: Open Source Media Player and Multimedia Engine

### Install VLC for Android

VLC for Android (`org.videolan.vlc`) can be installed from [F-Droid](https://f-droid.org/packages/org.videolan.vlc) or [Google Play](https://play.google.com/store/apps/details?id=org.videolan.vlc).

### Introduction of VLC

VLC is a libre and open source media player and multimedia engine, focused on playing everything, and running everywhere.

VLC can play most multimedia files, discs, streams, devices and is also able to convert, encode, stream and manipulate streams into numerous formats.

VLC is available on Windows, macOS, Linux, BSD, Android, iOS, and Haiku.

---

## Firefox: Fast and Private Browser

### Install Firefox

Firefox (`org.mozilla.firefox`), also known as Firefox Fast & Private Browser, can be installed from [Google Play](https://play.google.com/store/apps/details?id=org.mozilla.firefox).

### Introduction of Firefox

* Automatic tracker blocking: By default, Firefox blocks trackers and scripts such as social media trackers, cross-site cookie trackers, crypto-miners and fingerprinters.
* Enhanced tracking protection: Choose the “strict” setting and get even more privacy protections.
* Private browsing mode: When you close private mode, your browsing history is automatically erased from your device.
* Easy-to-use tabs: Create as many tabs as you like without losing track. See your open tabs as thumbnails or a list view.
* Password management: Firefox remembers your passwords across devices and suggests passwords for new log-ins and stores them securely.
* Enhanced tracking protection: automatically blocks online trackers from following you around the web and slowing down your pages.
* Tailored search options: Get suggestions and previously searched results in the search bar. Move the search bar location to the top or the bottom of the screen.
* Firefox search widget: Search the web directly from your device’s home screen.
* Browsing history: See the recent searches you’ve done on other devices for seamless searching across mobile, desktop and more.
* Add-on extensions: Includes ways to block ads, block certain webpages, turbo-charge privacy settings, translation, and more.
* Firefox home screen: Access your recent bookmarks, top sites and see popular articles from across the internet, recommended by Pocket, which is part of Mozilla.
* Dark and light mode.
* Float video player: Pop videos out of their webpages or players and pin them to the top of your phone’s screen.
* Share links.
* Saves data and battery.
* Bookmarks: Private bookmarks. Sync bookmarks. Import/export bookmarks from/to another browser.
* Multiplatform support: Firefox is available on Linux, Microsoft, macOS, Android, iOS, etc.
* Mozilla account: Sync tabs, history, etc. across devices.
* Select search engines: Search with Google, Bing, DuckDuckGo, or other search engines.

Go to [their official website](https://mozilla.org) for more information.

---

## DuckDuckGo: Privacy Browser

### Install DuckDuckGo

DuckDuckGo (`com.duckduckgo.mobile.android`), also known as DuckDuckGo Privacy Browser or DuckDuckGo Private Browser, can be installed from [F-Droid](https://f-droid.org/packages/com.duckduckgo.mobile.android) or [Google Play](https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android).

### Introduction of DuckDuckGo

* Bing ads: The ads in DuckDuckGo are Bing ads, powered by Microsoft.
* DuckDuckGo search engine: Uses DuckDuckGo as the search engine, for which the source code is not available.
* Duck.ai: Anonymous access to popular AI models, including GPT-4o mini, Claude 3, and open-source Llama 3.3 and Mistral, on Duck.ai. No Al training on your conversations.
* Duck player: Lets you watch YouTube without targeted ads in DuckDuckGo and what you watch won’t influence your recommendations.
* Enforce HTTPS encryption protection: Forces sites to use an encrypted HTTPS connection where available, protecting your data from prying eyes, like ISPs.
* Tracking protection: Blocks all the found hidden third-party trackers, and exposes the major advertising networks tracking you over time to you.
* Cookie pop-up protection: Banishes cookie pop-ups and automatically set your preferences to minimize cookies and maximize privacy.
* Escape fingerprinting: Makes it harder for companies to create a unique identifier for you by blocking attempts to combine info about your browser and device.
* Decode privacy policies: DuckDuckGo has partnered with Terms of Service Didn’t Read to include their scores and labels of website terms of service and privacy policies, where available.
* Privacy grade: Shows you a Privacy Grade rating when you visit a website, which is scored automatically based on the prevalence of hidden tracker networks, encryption availability, and website privacy practices.
* App tracking protection: Detects and blocks app trackers from other companies.
* Email protection: Blocks most email trackers and hide your existing email address with @duck.com addresses.
* Fire button: Clear all your tabs and data with one tap.
* Application lock: Secure the app with Touch ID or Face ID.
* DuckDuckGo search widget: Search the web directly from your device’s home screen.
* Browsing history.
* Recent and private tabs.
* Dark and light mode.
* Saves data and battery.
* Multiplatform support: DuckDuckGo is available on Linux, Microsoft, macOS, Android, iOS, etc.

Go to [their official website](https://duckduckgo.com) for more information.

---

## Brave: Privacy Browser

### Install Brave

Brave (`com.brave.browser`), also known as Brave Privacy Browser or Brave Private Web Browser, VPN, can be installed from [Google Play](https://play.google.com/store/apps/details?id=com.brave.browser).

### Introduction of Brave

* Brave search engine: Uses Brave Search as the search engine, for which the source code is not available.
* Brave Leo AI: The smart AI assistant built right into your browser. Ask questions, summarize pages, create new content, and more. Privately.
* Brave Rewards: Earn BAT tokens for private ads you see in Brave.
* Brave Wallet: A cryptocurrency wallet.
* Redirect AMP pages: Redirect to original (non-AMP) page URLs, instead of Google’s Accelerated Mobile Page versions.
* Adblock and tracking protection: Prevents trackers and ads from loading and showing in webpages.
* Script blocker: Blocks JavaScript.
* Enforce HTTPS encryption protection: Forces sites to use an encrypted HTTPS connection where available, protecting your data from prying eyes, like ISPs.
* Cookie pop-up protection: Banishes cookie pop-ups and automatically set your preferences to minimize cookies and maximize privacy.
* Escape fingerprinting: Makes it harder for companies to create a unique identifier for you by blocking attempts to combine info about your browser and device.
* Pop-up blocker.
* Saves data and battery.
* Brave search widget: Search the web directly from your device’s home screen.
* Dark and light mode.
* Bookmarks: Private bookmarks. Sync bookmarks. Import/export bookmarks from/to another browser.
* Browsing history.
* Recent and private tabs.
* Removes tracking codes when you copy URLs.
* Multiplatform support: Brave is available on Linux, Microsoft, macOS, Android, iOS, etc.

---

## Safe Space: A Safe Space For Your Digital Valuables

### Install Safe Space

Safe Space (`org.privacymatters.safespace`) can be installed from [F-Droid](https://f-droid.org/packages/org.privacymatters.safespace).

### Introduction of Safe Space

* Store files in a secure storage location that is not visible to other apps and is secured by device encryption and system authentication (Biometric and PIN/Pattern/Password).
* Open Images, Audio, Video, PDF documents and plain text documents.
* Create simple text notes without leaving the app.
* Dark and light mode.
* ability to copy and move files.
* Import from and export files to external storage without storage permissions.
* Completely offline with no telemetry and data collection.

---

## SimplyTranslate Mobile: A Privacy Friendly Frontend to Google Translate

### Install SimplyTranslate Mobile

SimplyTranslate Mobile (`com.simplytranslate_mobile`) can be installed from [F-Droid](https://f-droid.org/packages/com.simplytranslate_mobile).

### Introduction of SimplyTranslate Mobile

* This app is an alternative frontend to Google Translate.
* Supports 108 languages.
* Text-To-Speech (TTS).
* Can receive shared text from other apps.
* A translate button in the text selection toolbar.

### Website Version of SimplyTranslate Mobile

There is a website version of SimplyTranslate Mobile: <https://simplytranslate.org>.

---

## LibreTorrent

### Install LibreTorrent

LibreTorrent (`org.proninyaroslav.libretorrent`) can be installed from [F-Droid](https://f-droid.org/packages/org.proninyaroslav.libretorrent) or [Google Play](https://play.google.com/store/apps/details?id=org.proninyaroslav.libretorrent).

### Introduction of BitTorrent

* BitTorrent: BitTorrent is a communication protocol for peer-to-peer file sharing (P2P), which enables users to distribute data and electronic files over the Internet in a decentralized manner. BitTorrent downloading is considered to be faster than HTTP ("direct downloading") and FTP due to the lack of a central server that could limit bandwidth.
* BitTorrent trackers: BitTorrent trackers provide a list of files available for transfer and allow the client to find peer users, known as "seeds", who may transfer the files. BitTorrent trackers help the participants in the system find each other and form efficient distribution groups called swarms.
* BitTorrent client: A BitTorrent client enables a user to send or receive data as a peer in one or more swarms. The official BitTorrent client, μTorrent, qBittorrent, Transmission, Vuze, and BitComet are some of the most popular clients.
* Torrent file or meta-info file: A torrent file or meta-info file is a computer file that contains metadata about files and folders to be distributed, and usually also a list of the network locations of trackers, normally named with the extension .torrent.
* WebTorrent: WebTorrent is a peer-to-peer (P2P) streaming BitTorrent client written in JavaScript for use in web browsers, as well as a WebTorrent Desktop stand alone version able to bridge WebTorrent and BitTorrent serverless networks.

### Introduction of LibreTorrent

* BitTorrent 2.0 and WebTorrent support
* Select which files to download.
* Move files while downloading.
* Auto-move downloaded files to another folder or external drive.
* Stream files, with sequential downloads.
* Android TV.
* Material design, dark and black theme, and tablet UI.
* Customisable network, battery, and UI settings, etc.
* 35+ translations.
* Scheduling.
* Auto-downloading, with Atom/RSS manager.
* Create torrents, with many and big files.
* HTTP\S and magnet links.
* DHT, PeX, encryption, LSD, UPnP, NAT*PMP, µTP.
* IP filtering (eMule dat and PeerGuardian).
* Supports proxy for trackers and peers.
* Based on libtorrent4j.
* And more.

---

## Thunderbird: Privacy-Focused Email App

### Install Thunderbird

Thunderbird (`net.thunderbird.android`), also known as Thunderbird: Free Your Inbox, can be installed from [F-Droid](https://f-droid.org/packages/net.thunderbird.android) or [Google Play](https://play.google.com/store/apps/details?id=net.thunderbird.android).

### Introduction of Thunderbird

Thunderbird is a powerful, privacy-focused email app. Effortlessly manage multiple email accounts from one app, with a Unified Inbox option for maximum productivity. Built on open-source technology and supported by a dedicated team of developers alongside a global community of volunteers, Thunderbird never treats your private data as a product. Supported solely by financial contributions from our users, so you never have to see ads mixed in with your emails again.

Features of Thunderbird:

* Ditch multiple apps and webmail. Use one app, with an optional Unified Inbox, to power through your day.
* Thunderbird directly connect you to your email provider and doesn’t sell your personal data.
* OpenPGP email encryption (PGP/MIME) with the “OpenKeychain” app, to encrypt and decrypt your messages.
* Choose to sync your email instantly, at set intervals, or on-demand.
* Local and server-side search.
* Thunderbird works with IMAP and POP3 protocols, supporting a wide range of email providers, including Gmail, Outlook, Yahoo Mail, iCloud, and more.
* Multiplatform support: Thunderbird is available on Linux, Microsoft, macOS, Android, iOS, etc.

Go to [their official website](https://www.thunderbird.net) for more information.

---

## Promoted or Related Works, References, and Bibliography

### ANC by Gaurav Ujwal / gujjwal00

* F-Droid: <https://f-droid.org/packages/com.gaurav.avnc>.
* GitHub: <https://github.com/gujjwal00/avnc>.

### AndroidIDE by AndroidIDE / AndroidIDEOfficial

* GitHub: <https://github.com/AndroidIDEOfficial/AndroidIDE>.
* F-Droid archive: <https://apt.izzysoft.de/fdroid/index/apk/com.itsaky.androidide?repo=archive>.
* Official website: <https://androidide.com>.

### Andronix by Devriz Technologies LLP / Andronix App /AndronixApp

* Google Play: <https://play.google.com/store/apps/details?id=studio.com.techriz.andronix>.
* GitHub: <https://github.com/AndronixApp/AndronixOrigin>.
* Official website: <https://docs.andronix.app>.

### aShell by Sunil Paul Mathew M. / sunilpaulmathew

* F-Droid: <https://f-droid.org/packages/in.sunilpaulmathew.ashell>.
* GitLab: <https://gitlab.com/sunilpaulmathew/ashell>.

### Brave / Brave Browser by Brave Software / brave

* Google Play: <https://play.google.com/store/apps/details?id=com.brave.browser>.
* GitHub: <https://github.com/brave/brave-browser>.
* Official website: <https://brave.com>.

### Debian by the Debian Project

* GitLab: <https://salsa.debian.org/public>.
* Official website: <https://www.debian.org>.

### DontKillMyApp / DontKillMyApp: Make apps work by Urbandroid Team / urbandroid-team / Petr Nálevka (Urbandroid)

* F-Droid: <https://f-droid.org/packages/com.urbandroid.dontkillmyapp>.
* Google Play: <https://play.google.com/store/apps/details?id=com.urbandroid.dontkillmyapp>.
* GitHub: <https://github.com/urbandroid-team/dontkillmy-app>.
* Official website: <https://dontkillmyapp.com>.

### droidVNC-NG / droidVNC-NG VNC Server by Christian Beier / bk138

* F-Droid: <https://f-droid.org/packages/net.christianbeier.droidvnc%5Fng>.
* Google Play: <https://play.google.com/store/apps/details?id=net.christianbeier.droidvnc%5Fng>.
* GitHub: <https://github.com/bk138/droidVNC-NG>.

### DuckDuckGo / DuckDuckGo Browser / DuckDuckGo Privacy Browser / DuckDuckGo Private Browser by DuckDuckGo or duckduckgo

* F-Droid: <https://f-droid.org/packages/com.duckduckgo.mobile.android>.
* Google Play: <https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android>.
* GitHub: <https://github.com/duckduckgo/Android>.
* Official website: <https://duckduckgo.com>.

### F-Droid by F-Droid

* GitLab: <https://gitlab.com/fdroid>.
* Official website: <https://f-droid.org>.

### Firefox / Firefox Fast & Private Browser by Mozilla

* Google Play: <https://play.google.com/store/apps/details?id=org.mozilla.firefox>.
* Mercurial: <https://hg.mozilla.org/mozilla-central>.
* Official Website: <https://mozilla.org>.

### GNU

* Official website: <https://www.gnu.org>.

### Invizible Pro by Garmatin Oleksandr / Oleksandr Garmatin / Gedsh

* F-Droid: <https://f-droid.org/packages/pan.alexander.tordnscrypt.stable>.
* Google Play: <https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp>.
* GitHub: <https://github.com/Gedsh/InviZible>.
* Official website: <https://invizible.net>.

### IzzyOnDroid by IzzyOnDroid

* IzzyOnDroid F-Droid repository: <http://apt.izzysoft.de/fdroid/repo>.

### LibreOffice and LibreOffice Viewer by The Document Foundation

* F-Droid: <https://f-droid.org/packages/org.documentfoundation.libreoffice>.
* Google Play: <https://play.google.com/store/apps/details?id=org.documentfoundation.libreoffice>.
* Official website: <https://www.libreoffice.org>.
* Source code: <https://git.libreoffice.org>.

### LibreTorrent by Yaroslav Pronin / proninyaroslav

* F-Droid: <https://f-droid.org/packages/org.proninyaroslav.libretorrent>.
* Google Play: <https://play.google.com/store/apps/details?id=org.proninyaroslav.libretorrent>.
* GitHub: <https://github.com/proninyaroslav/libretorrent>.
* GitLab: <https://gitlab.com/proninyaroslav/libretorrent>.
* OpenApk: <https://www.openapk.net/libretorrent/org.proninyaroslav.libretorrent>.
* APKMirror: <https://www.apkmirror.com/apk/proninyaroslav/libretorrent>.
* Aptoide: <https://libretorrent.en.aptoide.com/app>.

### Linux Command Library by Simon Schubert / SimonSchubert

* F-Droid: <https://f-droid.org/packages/com.inspiredandroid.linuxcommandbibliotheca>.
* Google Play: <https://play.google.com/store/apps/details?id=com.inspiredandroid.linuxcommandbibliotheca>.
* GitHub: <https://github.com/SimonSchubert/LinuxCommandLibrary>.
* Official website: <https://linuxcommandlibrary.com>.

### Material Files / MaterialFiles by Hai Zhang / zhanghai

* F-Droid: <https://f-droid.org/packages/me.zhanghai.android.files>.
* Google Play: <https://play.google.com/store/apps/details?id=me.zhanghai.android.files>.
* GitHub: <https://github.com/zhanghai/MaterialFiles>.

### MyIP / IPCheck.ing by Jason Ng / jason5ng32

* GitHub: <https://github.com/jason5ng32/MyIP>.
* Official website: <https://ipcheck.ing>.

### NetGuard by Marcel Bokhorst / M66B / Marcel Bokhorst, FairCode BV

* F-Droid: <https://f-droid.org/packages/eu.faircode.netguard>.
* GitHub: <https://github.com/M66B/NetGuard>.
* Google Play: <https://play.google.com/store/apps/details?id=eu.faircode.netguard>.
* Official website of NetGuard: <https://netguard.me>.
* Official website of FairCode: <https://www.faircode.eu>.

### NewPipe by Team NewPipe / TeamNewPipe

* NewPipe F-Droid repo: <https://archive.newpipe.net/fdroid/repo>.
* F-Droid: <https://f-droid.org/packages/org.schabi.newpipe>
* GitHub: <https://github.com/TeamNewPipe/NewPipe>.
* Official website: <https://newpipe.net>.

### OpenSSH by OpenSSH / openssh

* GitHub: <https://github.com/openssh>.
* OpenBSD: <http://cvsweb.openbsd.org/src/usr.bin/ssh>.
* Official website: <https://www.openssh.com>.

### OpenSSL by OpenSSL / openssl

* GitHub: <https://github.com/openssl/openssl>.
* Official website: <https://www.openssl.org>.
* Official doc: <https://docs.openssl.org>.

### Phyphox by RWTH Aachen University / phyphox

* F-Droid: <https://f-droid.org/packages/de.rwth\_aachen.phyphox>.
* Google Play: <https://play.google.com/store/apps/details?id=de.rwth\_aachen.phyphox>.
* GitHub: <https://github.com/phyphox/phyphox-android>.
* Official website: <http://phyphox.org>.

### PipePipe by InfinityLoop1309 / InfinityLoop1308

* F-Droid: <https://f-droid.org/packages/InfinityLoop1309.NewPipeEnhanced>.
* GitHub: <https://github.com/InfinityLoop1308/PipePipe>.

### QEMU by Qemu Project / QEMU

* GitLab: <https://gitlab.com/qemu-project/qemu>.
* Official website: <https://www.qemu.org>.

### Safe Space by aashishksahu

* F-Droid: <https://f-droid.org/packages/org.privacymatters.safespace>.
* GitHub: <https://github.com/aashishksahu/SafeSpace>.

### SD Maid SE / SD Maid 2/SE - System Cleaner / sdmaid-se by d4rken / d4rken-org / darken / darken development

* F-Droid: <https://f-droid.org/packages/eu.darken.sdmse>.
* Google Play: <https://play.google.com/store/apps/details?id=eu.darken.sdmse>.
* GitHub: <https://github.com/d4rken-org/sdmaid-se>.

### Shizuku by Xingchen & Rikka / RikkaApps

* Google Play: <https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api>.
* GitHub: <https://github.com/RikkaApps/Shizuku>.
* Official website: <https://shizuku.rikka.app>.

### SimplyTranslate Mobile by ManeraKai

* F-Droid: <https://f-droid.org/packages/com.simplytranslate_mobile>.
* GitHub: <https://github.com/ManeraKai/simplytranslate_mobile>.
* Official website: <https://simplytranslate.org>.

### SystemUI Tuner by Zachary Wander / zacharee

* Google Play: <https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner>.
* GitHub: <https://github.com/zacharee/Tweaker>.

### Tailscale by Tailscale / tailscale

* F-Droid: <https://f-droid.org/packages/com.tailscale.ipn>.
* Google Play: <https://play.google.com/store/apps/details?id=com.tailscale.ipn>.
* Official website: <https://tailscale.com>.

### Termux by Fredrik Fornwall / Termux / termux

* F-Droid: <https://f-droid.org/packages/com.termux>.
* GitHub of termux-app: <https://github.com/termux/termux-app>.
* GitHub of x11-packages: <https://github.com/termux/x11-packages>.
* Official wiki: <https://wiki.termux.com>.
* Google Play (deprecated): <https://play.google.com/store/apps/details?id=com.termux>.

### Termux:API by Fredrik Fornwall / Termux / termux

* F-Droid: <https://f-droid.org/packages/com.termux.api>.
* GitHub: <https://github.com/termux/termux-api>.
* Official wiki: <https://wiki.termux.com/wiki/Termux:API>.

### Termux:Boot by Fredrik Fornwall / Termux / termux

* F-Droid: <https://f-droid.org/packages/com.termux.boot>.
* GitHub: <https://github.com/termux/termux-boot>.
* Official wiki: <https://wiki.termux.com/wiki/Termux:Boot>.

### Termux:Float by Fredrik Fornwall / Termux / termux

* F-Droid: <https://f-droid.org/packages/com.termux.float>.
* GitHub: <https://github.com/termux/termux-float>.
* Official wiki: <https://wiki.termux.com/wiki/Termux:Float>.

### Termux:Styling by Fredrik Fornwall / Termux / termux

* F-Droid: <https://f-droid.org/packages/com.termux.styling>.
* GitHub: <https://github.com/termux/termux-styling>.
* Official wiki: <https://wiki.termux.com/wiki/Termux:Styling>.

### Termux:Widget by Fredrik Fornwall / Termux / termux

* F-Droid: <https://f-droid.org/packages/com.termux.widget>.
* GitHub: <https://github.com/termux/termux-widget>.
* Official wiki: <https://wiki.termux.com/wiki/Termux:Widget>.

### Termux-x11 by Fredrik Fornwall / Termux / termux

* GitHub: <https://github.com/termux/termux-x11>.

### TigerVNC or tigervnc by TigerVNC

* GitHub: <https://github.com/TigerVNC/tigervnc>.
* Official website: <https://tigervnc.org>.

### Thunderbird or Thunderbird: Free Your Inbox by Mozilla Thunderbird / thunderbird / Mozilla

* F-Droid: <https://f-droid.org/packages/net.thunderbird.android>.
* Google Play: <https://play.google.com/store/apps/details?id=net.thunderbird.android>.
* GitHub: <https://github.com/thunderbird/fdroid-thunderbird>.
* Official website: <https://www.thunderbird.net>.


### Tor and Tor Browser by The Tor Project

* Google Play of Tor Browser: <https://play.google.com/store/apps/details?id=org.torproject.torbrowser>.
* GitLab of Tor Browser: <https://gitlab.torproject.org/tpo/applications/tor-browser>.
* GitLab of The Tor Project: <https://gitlab.torproject.org/tpo>.
* GitLab of the Debian package tor: <https://gitlab.torproject.org/tpo/core/debian/tor>.
* Official website: <https://www.torproject.org>.
* Check Tor Project: <https://check.torproject.org>.

### TrackerControl / TC by TrackerControl / Oxford HCC

* F-Droid: <https://f-droid.org/packages/net.kollnig.missioncontrol.fdroid>.
* GitHub: <https://github.com/TrackerControl/tracker-control-android>.
* Official website: <https://trackercontrol.org>.
* Google Play (incomplete): <https://play.google.com/store/apps/details?id=net.kollnig.missioncontrol.play>.

### VLC for Android / vlc-android by Videolabs / VLC Mobile Team / VideoLAN / videolan

* F-Droid: <https://f-droid.org/packages/org.videolan.vlc>.
* Google Play: <https://play.google.com/store/apps/details?id=org.videolan.vlc>.
* Amazon: <https://www.amazon.com/VLC-Mobile-Team-for-Fire/dp/B00U65KQMQ>.
* AppGallery: <https://appgallery.huawei.com/app/C101924579>.
* GitHub: <https://github.com/videolan/vlc-android>.
* GitLab: <https://code.videolan.org>.
* Official website: <https://www.videolan.org>.

### Wireguard by Jason A. Donenfeld

* Official website: <https://www.wireguard.com>.

### Xtra by AndreyAsadchy or Andrey Asadchy and crackededed

* F-Droid: <https://f-droid.org/packages/com.github.andreyasadchy.xtra>.
* GitHub: <https://github.com/crackededed/Xtra>.

### Others

* awesome-shizuku by Tim Schneeberger / timschneeb: <https://github.com/timschneeb/awesome-shizuku>.
* ChatGPT by OpenAI: <https://openai.com/chatgpt>.
* DNS leak test: <https://www.dnsleaktest.com>.
* FDroid-List-Repository by userkilled: <https://github.com/userkilled/FDroid-List-Repository>.
* freshtermux by Miranda / cyb0rgdoll: <https://github.com/cyb0rgdoll/freshtermux>.
* shizuku-apps by Souvik Bagchi (Mr HyperIon) / MrHyperlon101: <https://github.com/MrHyperIon101/shizuku-apps>.
* What Is My IP Address: <https://whatismyipaddress.com>.
* Wikipedia by Wikimedia Foundation: <https://wikipedia.org>.

---

## Contribution

We welcome contributions to this project! Please fork the repository and submit a pull request for your contributions. For clarity and convenience, we recommend making one pull request per revised section or added feature.

---

## License

Copyright (C) 2024 [Willie169](https://github.com/Willie169).

This project is licensed under the terms of either:

* **GNU Free Documentation License, Version 1.3 (GFDL 1.3)**
* **Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)**

### GNU Free Documentation License, Version 1.3 (GFDL 1.3)

Permission is granted to copy, distribute, and/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.

You should have received a copy of the GNU Free Documentation License along with this document. If not, see <https://www.gnu.org/licenses/fdl-1.3.html>.

### Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)

You are free to:

* **Share** — copy and redistribute the material in any medium or format
* **Adapt** — remix, transform, and build upon the material for any purpose, even commercially.

The licensor cannot revoke these freedoms as long as you follow the license terms.

Under the following terms:

* **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
* **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

You should have received a copy of the Creative Commons Attribution-ShareAlike 4.0 International License along with this program. If not, see <https://creativecommons.org/licenses/by-sa/4.0>.
