# Android Non-Root
This guide offers a comprehensive approach to enhance your Android device’s security, privacy, and customization without root.
## Table of Contents
- [Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell](#shizuku-systemui-tuner-and-ashell-use-local-adb-of-android-device-on-terminals-such-as-termux-without-another-device-with-shizuku-leave-developer-options-off-when-doing-so-with-systemui-tuner-and-use-adb-with-features-like-autocomplete-suggestion-with-ashell)
  - [Install Shizuku](#install-shizuku)
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
  - [**Check**](#check)
  - [Use Invizible Pro without TrackerControl](#use-invizible-pro-without-trackercontrol)
- [Tor Browser](#tor-browser)
- [License](#license)
- [Promoted and Related Works](#promoted-and-related-works)
  - [Termux](#termux)
  - [Shizuku](#shizuku)
  - [SystemUI Tuner](#systemui-tuner)
  - [Invizible Pro](#invizible-pro)
  - [TrackerControl (also known as TC)](#trackercontrol-also-known-as-tc)
  - [NetGuard](#netguard)
  - [DontKillMyApp](#dontkillmyapp)
  - [aShell](#ashell)
- [References and Bibliography ](#references-and-bibliography)
## Shizuku, SystemUI Tuner, and aShell: Use Local ADB of Android Device on Terminals Such as Termux without Another Device with Shizuku, Leave Developer Options off When Doing So with SystemUI Tuner, and Use ADB with Features like Autocomplete Suggestion with aShell
### Install Shizuku
- Shizuku is An open-source app for serving multiple apps that require root/adb.
- Install **Shizuku** from Google Play Store: [https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api).
- Official tutorial (doesn't contain System UI Tuner and aShell): [https://shizuku.rikka.app/guide/setup/?night=1](https://shizuku.rikka.app/guide/setup/?night=1)
### Connect Shizuku to Wireless ADB
1. Grant **Shizuku** notification permission.
2. Tap **Pairing** in **Start via Wireless debugging** block in **Shizuku**.
2. Connect to a WiFi you trust. You don't need to log in to the WiFi if the WiFi needs that. You just need to let your phone think that you're connected to WiFi.
2. In phone's **Settings** or something similar, go to **About Phone > Software Information** or something similar, and tap the **Version Number** seven times to enable **Developer Options**.
2. In the **Developer Options**, enable **Wireless ADB** and tap **Pair with a pairing code**.
2. Input the pairing code in the notification of **Shizuku**.
2. In the **Developer Options**, deactivate **ADB authorization timeout** if you don't want to do all the above again every time you use **Shizuku**. However, the connection may still be killed by the system after maybe a few days even if you've done this, follow [Reconnect Shizuku in Case it Stops with SystemUI Tuner](#reconnect-shizuku-in-case-it-stops-with-systemui-tuner) to reconnect if you're using **SystemUI Tuner** or something similar at the same time, follow the above otherwise.
2. Back to **Shizuku** and tap **Start** in **Start via Wireless debugging** block. You all see **Shizuku is running** on the top of the interface of **Shizuku**.
### Use Shizuku in a Terminal Application for the First Time (Termux for Example)
1. Tap **Use Shizuku in terminal applications** in **Shizuku** and export files `rish` and `rish_shizuku.dex` to somewhere on your phone.
2. Use a text editor to replace `PKG` in `rish` with the package name of your terminal application. **Termux**'s package name is `com.termux`. Run `termux-setup-storage` to grant **Termux** storage permission if you want to use it to run ADB commands (and many other commands).
2. Open your terminal application and move the exported files to somewhere it can access with `mv old_location new_location`. The root directory of the main storage of Android is usually `/storage/emulated/0`. The home directory of **Termux** is `/data/data/com.termux/home`, which is abbreviated as `~` in **Termux**.
2. Go to the directory you moved the exported files to with `cd directory` (assumed `~/shizuku` below) and run `sh rish`.
2. Where used to be `~ $` should become `e2q:/ $` or something similar if `sh rish` succeeded. Write ADB commands here. Note that there is no need to use `adb` or `adb shell` prefixes before commands and that `devices` command gets `/system/bin/sh: devices: inaccessible or not found`.
2. You can turn WiFi off after ADB is connected. **Shizuku** may say **Paring failed** after that, but you can check on the Terminal wether you're in the adb shell. If you see `e2q:/ $` or something similar, then it's working well.
2. Optionally, create a `.sh` file (`nano ~/shizuku.sh` for example), paste the following code block, save it, and make it executable with `chmod +x shizuku.sh` so that you can run this shortcut to start **Shizuku** on your terminal afterward.
    ```
    #!/data/data/com.termux/files/usr/bin/bash
    cd shizuku
    sh rish
    ```
2. **Note**: It is recommended to use **Termux**'s F-Droid version and avoid using Google Play Store version because the latter is no longer updated. F-Droid: [https://f-droid.org/packages/com.termux/](https://f-droid.org/packages/com.termux/).
### Install SystemUI Tuner
Install **SystemUI Tuner** (pub: **Zachary Wander**) from Google Play Store: [https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner](https://play.google.com/store/apps/details?id=com.zacharee1.systemuituner).
### To Leave Developer Options off When Using Shizuku to Connect to ADB
Some financial apps may require Developer Options to be off when using them. This is the guide about how to turn Developer Options off while still using Shizuku ADB Shell.
1. Follow the screen instructions of **SystemUI Tuner**. 
2. Run `adb shell` command `pm grant com.zacharee1.systemuituner android.permission.WRITE_SECURE_SETTINGS` (you can do it with **Shizuku** and a terminal such as **Termux** or **aShell**).
2. Connect to a WiFi. You don't need to log in or have real WiFi access, just make your phone believes you are connected to WiFi.
2. Turn off **Developer Options** if it's on. The toggle switch is usually on the top of **Developer Options**.
2. In **SystemUI Tuner**, go to **Developer** and turn on **Enable ADB** and **Enable Wireless ADB**.
2. Press **Start** on **Shizuku** and make sure it's running.
2. Go to **Persistent Options** and select **Enable ADB**.
2. Don't `exit` the session of the ADB on your terminal application (hold wake lock if needed) if you want to keep **Shizuku** running.
2. Turn off WiFi. **Enable Wireless ADB** will be turned off automatically by system settings. You can check that in **SystemUI Tuner**.
### Reconnect Shizuku in Case it Stops with SystemUI Tuner
1. Connect to a WiFi. You don't need to log in or have real WiFi access, just make your phone believes you are connected to WiFi.
2. Turn off **Developer Options** if it's on. The toggle switch is usually on the top of **Developer Options**.
2. In **SystemUI Tuner**, go to **Developer** and turn on **Enable Wireless ADB**.
2. Press **Start** on **Shizuku** and make sure it's running.
2. Don't `exit` the session of the ADB on your terminal application (hold wake lock if needed) if you want to keep **Shizuku** running.
2. Turn off WiFi. **Enable Wireless ADB** should be turned off automatically. You can check that in **SystemUI Tuner**.
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
### **Check**
- Go to [https://check.torproject.org/](https://check.torproject.org/) to check if your Tor route succeeded. If yes, you will see  "Congratulations. This browser is configured to use Tor." (assume the page's language is set to English).
- Go to [https://whatismyipaddress.com/](https://whatismyipaddress.com/) or other IP checking websites to see wether it's your device's IP. If not, your Tor route is successful.
- Go to [https://www.dnsleaktest.com/results.html](https://www.dnsleaktest.com/results.html) or other DNS leak testing websites to check if there is a DNS leak. You will see the DNS servers you set in **DNSCrypt Settings** in **InviZible Pro** instead of your ISP's servers if there's no DNS leak.
### Use Invizible Pro without TrackerControl
- Change to **VPN mode** by tap the 3-point button in the upper right corner.
## Tor Browser
- Haven't been written.
## License
This project is licensed under the terms the GNU General Public License v3.0 or later (GPL-3.0-or-later).\
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.\
You should have received a copy of the GNU General Public License along with this program.  If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).\
By contributing to this project, you agree that your contributions will be licensed under GPL-3.0-or-later.
## Promoted and Related Works
### Termux
- F-Droid: [https://f-droid.org/packages/com.termux/](https://f-droid.org/packages/com.termux/).
- GitHub: [https://github.com/termux/termux-app](https://github.com/termux/termux-app).
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
## References and Bibliography 
- ChatGPT of OpenAI: [https://openai.com/chatgpt/](https://openai.com/chatgpt/).
- awesome-shizuku of timschneeb: [https://github.com/timschneeb/awesome-shizuku](https://github.com/timschneeb/awesome-shizuku)
- shizuku-apps of MrHyperlon101: [https://github.com/MrHyperIon101/shizuku-apps](https://github.com/MrHyperIon101/shizuku-apps)