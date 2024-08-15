# Android Non-Root
## Connect to ADB to Self-Debug Android Device with Shizuku without Another Device and Leave Developer Options off When Doing So with SystemUI Tuner
### Ensure Termux Has Storage Permission
```
termux-setup-storage
```
### Connect for the First Time
1. Install **Shizuku** from the Google Play Store.
2. Grant **Shizuku** notification permission.
2. Tap **Pairing** in **Start via Wireless debugging** block in **Shizuku**.
2. Connect to a WiFi you trust. You don't need to login to the WiFi if the WiFi needs that. You just need to let your phone think that you're connected to WiFi.
2. In phone's **Settings** or something similar, go to **About Phone > Software Information** or something similar, and tap the **Version Number** seven times to enable **Developer Options**.
2. In the **Developer Options**, enable **Wireless ADB** and tap **Pair with a pairing code**.
2. Input the pairing code in the notification of **Shizuku**.
2. In the **Developer Options**, deactivate **ADB authorization timeout** if you don't want to do all above again next time you use **Shizuku**.
2. Back to **Shizuku** and tap **Start** in **Start via Wireless debugging** block. You all see **Shizuku is running** on the top of the interface of **Shizuku**.
### Use Shizuku in a Terminal Application for the First Time (Termux for Example)
1. Tap **Use Shizuku in terminal applications** in **Shizuku** and export files `rish` and `rish_shizuku.dex` to somewhere on your phone.
2. Use a text editor to replace `PKG` in `rish` with the pakcage name of your terminal application. **Termux**'s package name is `com.termux`.
2. Open your terminal application and move the exported files to somewhere it can access with `mv old_location new_location`. The root directory of the main storage of Android is usually `/storage/emulated/0`. The home directory of **Termux** is `/data/data/com.termux/home`, which is abbreviated as `~` in **Termux**.
2. Go to the directory you moved the exported files to with `cd directory` (assumed `~/shizuku` below) and run `sh rish`.
2. Where used to be `~ $` should become `e2q:/ $` or something similar if `sh rish` succeeded. Write ADB commands here. Note that there is no need to use `adb` or `adb shell` prefixes before commands and that `devices` command gets `/system/bin/sh: devices: inaccessible or not found`.
2. You can turn WiFi off after ADB is connected. **Shizuku** may say **Paring failed** aftet that ,but it's actually running if you still see `e2q:/ $` or something similar on your terminal application.
2. Optionally, create a `.sh` file (`nano ~/shizuku.sh` for example), paste the following code block, save it, and make it executable with `chmod +x shizuku.sh`
    ```
    #!/data/data/com.termux/files/usr/bin/bash
    cd shizuku
    sh rish
    ```
### To Leave Developer Options off When Using Shizuku to Connect to ADB (Some Financial Apps Require Developer Options to Be Off)
1. Install **SystemUI Tuner** from the Google Play Store and follow the instructions to enable it, including running the following ADB command with **Shizuku**:
    ```
    pm grant com.zacharee1.systemuituner android.permission.WRITE_SECURE_SETTINGS
    pm grant com.zacharee1.systemuituner android.permission.PACKAGE_USAGE_STATS
    pm grant com.zacharee1.systemuituner android.permission.DUMP
    ```
2. Connect to a WiFi.
2. Turn off **Developer Options** if it's on. The toggle switch is usually on the top of **Developer Options**.
2. In **SystemUI Tuner**, go to **Developer** and turn on **Enable ADB** and **Enable Wireless ADB**.
2. Press **Start** on **Shizuku** and make sure it's running.
2. Go to **Persistent Options** and select **Enable ADB**.
2. Don't `exit` the session of the ADB on your terminal application (hold wakelock if needed) if you want to keep **Shizuku** running.
2. Turn off WiFi. **Enable Wireless ADB** should be turned off automatically. You can check that in **SystemUI Tuner**.
### Reconnect Shizuku in Case it Stops
1. Connect to a WiFi.
2. Turn off **Developer Options** if it's on. The toggle switch is usually on the top of **Developer Options**.
2. In **SystemUI Tuner**, go to **Developer** and turn on **Enable Wireless ADB**.
2. Press **Start** on **Shizuku** and make sure it's running.
2. Don't `exit` the session of the ADB on your terminal application (hold wakelock if needed) if you want to keep **Shizuku** running.
2. Turn off WiFi. **Enable Wireless ADB** should be turned off automatically. You can check that in **SystemUI Tuner**.
---
## Route Traffic through Tor, Block DNS over UDP, Set DNS Server, and Block Unwanted Trackers with TrackerControl and InviZible Pro on Android
### Install InviZible Pro
- Download **InviZible Pro** from F-Droid ([https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/](https://f-droid.org/packages/pan.alexander.tordnscrypt.stable/)) and install it.
### Install TrackerControl
- Download **TrackerControl** (TC) from F-Droid ([https://f-droid.org/zh_Hant/packages/net.kollnig.missioncontrol.fdroid/](https://f-droid.org/zh_Hant/packages/net.kollnig.missioncontrol.fdroid/)) and install it.
- **Note**: Avoid using the Google Play version.
### Configure TrackerControl (TC)
- Turn on **TrackerControl** as a VPN service for the entire device.
- Disable monitoring of **InviZible Pro** (`pan.alexander.tordnscrypt.stable`) within **TrackerControl**.
- Go to the Advanced options in **TrackerControl**.
    - Set the **SOCKS5 address** to `127.0.0.1`.
    - Set the **SOCKS port** to the port you've configured Tor to use in **InviZible Pro** (`9050` by default).
    - Enable the **Use SOCKS5 proxy** option.
    - Go to **Port forwarding**.
       - Add `UDP 53>/127.0.0.1:`the port you've configured DNSCrypt to use in **InviZible Pro**  (`5354` by default) `nobody`.
       - Add `TCP 53>/127.0.0.1:`the port you've configured DNSCrypt to use in **InviZible Pro**  (`5354` by default) `nobody`.
    - Set first (above) **VPN DNS** as `9.9.9.9`.
    - Set second (below) **VPN DNS** as `149.112.112.112`.
- Block unwanted trackers of the apps.
- You can also apply above settings except blocking trackers with:
    ```
    <?xml version='1.0' encoding='UTF-8' standalone='yes' ?>
    <trackercontrol>
      <application>
        <setting key="subnet" type="boolean" value="false" />
        <setting key="reload_onconnectivity" type="boolean" value="true" />
        <setting key="resolve" type="boolean" value="true" />
        <setting key="disable_on_call" type="boolean" value="false" />
        <setting key="dns2" type="string" value="149.112.112.112" />
        <setting key="filter_udp" type="boolean" value="true" />
        <setting key="domain_based_blocking" type="boolean" value="true" />
        <setting key="dark_theme" type="boolean" value="true" />
        <setting key="whitelist_roaming" type="boolean" value="true" />
        <setting key="lockdown_other" type="boolean" value="true" />
        <setting key="lan" type="boolean" value="false" />
        <setting key="national_roaming" type="boolean" value="false" />
        <setting key="pcap_file_size" type="string" value="2" />
        <setting key="whitelist_other" type="boolean" value="false" />
        <setting key="initialized_strict_mode" type="boolean" value="true" />
        <setting key="unmetered_4g" type="boolean" value="false" />
        <setting key="show_nointernet" type="boolean" value="false" />
        <setting key="log_logcat" type="boolean" value="false" />
        <setting key="dns" type="string" value="9.9.9.9" />
        <setting key="pcap_record_size" type="string" value="64" />
        <setting key="sort" type="string" value="trackers_all" />
        <setting key="strict_blocking" type="boolean" value="false" />
        <setting key="pause" type="string" value="0" />
        <setting key="hosts_url_new" type="string" value="https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts" />
        <setting key="wifi_homes" type="set" value="" />
        <setting key="traffic_blocked" type="boolean" value="true" />
        <setting key="hosts_url" type="string" value="https://www.netguard.me/hosts" />
        <setting key="install" type="boolean" value="false" />
        <setting key="use_metered" type="boolean" value="false" />
        <setting key="stats_frequency" type="string" value="1000" />
        <setting key="lockdown_wifi" type="boolean" value="true" />
        <setting key="proto_other" type="boolean" value="true" />
        <setting key="eu_roaming" type="boolean" value="false" />
        <setting key="installed" type="boolean" value="true" />
        <setting key="socks5_addr" type="string" value="127.0.0.1" />
        <setting key="notify_access" type="boolean" value="false" />
        <setting key="log_app" type="boolean" value="true" />
        <setting key="log" type="boolean" value="true" />
        <setting key="show_system" type="boolean" value="true" />
        <setting key="show_stats" type="boolean" value="false" />
        <setting key="enabled" type="boolean" value="true" />
        <setting key="socks5_port" type="string" value="9050" />
        <setting key="proto_tcp" type="boolean" value="true" />
        <setting key="manage_system" type="boolean" value="true" />
        <setting key="stats_samples" type="string" value="90" />
        <setting key="screen_other" type="boolean" value="false" />
        <setting key="initialized" type="boolean" value="true" />
        <setting key="theme" type="string" value="teal" />
        <setting key="whitelist_wifi" type="boolean" value="false" />
        <setting key="unmetered_2g" type="boolean" value="false" />
        <setting key="use_hosts" type="boolean" value="false" />
        <setting key="validate" type="string" value="www.f-droid.org" />
        <setting key="handover" type="boolean" value="false" />
        <setting key="screen_on" type="boolean" value="true" />
        <setting key="update_check" type="boolean" value="true" />
        <setting key="socks5_enabled" type="boolean" value="true" />
        <setting key="debug_iab" type="boolean" value="false" />
        <setting key="ip6" type="boolean" value="true" />
        <setting key="filter" type="boolean" value="true" />
        <setting key="auto_enable" type="string" value="0" />
        <setting key="watchdog" type="string" value="0" />
        <setting key="screen_delay" type="string" value="0" />
        <setting key="organization" type="boolean" value="true" />
        <setting key="loglevel" type="string" value="6" />
        <setting key="tethering" type="boolean" value="false" />
        <setting key="track_usage" type="boolean" value="false" />
        <setting key="screen_wifi" type="boolean" value="false" />
        <setting key="unmetered_3g" type="boolean" value="false" />
      </application>
      <wifi />
      <mobile />
      <screen_wifi />
      <screen_other />
      <roaming />
      <lockdown />
      <apply>
        <setting key="com.termux" type="boolean" value="false" />
        <setting key="pan.alexander.tordnscrypt.stable" type="boolean" value="false" />
      </apply>
      <notify />
      <forward>
        <port pkg="nobody" protocol="17" dport="53" raddr="127.0.0.1" rport="5354" />
        <port pkg="nobody" protocol="6" dport="53" raddr="127.0.0.1" rport="5354" />
      </forward>
      <blocklist>
      </blocklist>
    </trackercontrol>
    ```
- Note: **TrackerControl** has **Traffic log** feature for free, which can help a lot in identifying which trackers should be unblocked when services crash.
- Note: Above guide, including the setting xml, can be used in **NetGuard** as well because **TrackerControl** uses NetGuard's code. However, **Traffic log** is only available in **NetGuard Pro** and **TrackerControl**.
- Note: You may have to disable monitoring of **Termux** (`com.termux`) within **TrackerControl** if you want to use `tor` and/or `torsocks` in termux.
### Configure InviZible Pro
- Change to **proxy mode** by tap the the third button from the right in the upper right corner.
- Go to **Fast settings**.
    - Turn on **Autostart DNSCrypt** and **Autostart Tor**.
    - Set Delay, DNSCrypr servers, bridges, whether to spoof SNI, etc. if needed.
- Go to **Common Settings** and turn on **Prevent device sleep** if needed.
- Go to **DNSCrypt Settings**
    - Go to **Listen port** and set it to the port **TrackerControl** forwarding UDP and TCP of port `53` to (`5354` by default).
    - Set requirements if you want.
    - Turn on **Force TCP**.
    - Turn on **Outbound proxy** in **SOCKS proxy** section.
    - Set **Proxy port** as the port you want to configure Tor to use in **InviZible Pro** (`9050` by default).
    - Ensure the `onion 127.0.0.1:5400` in **Forwarding rules** is coordinate with the **DNS port** in **Tor settings**.
    - Turn on **Query logging** and **Suspicious logging** if you want.
- Go to **Tor settings**.
    - Set Nodes, Proxy, etc. if you want. Make sure the **SOCKS port is coordinate with the **SOCKS proxy** in **TrackerControl** and the **DNS port** is coordinate with the **Forwarding rules** in **DNSCrypt Settings**.
- Turn on both **Tor** and **DNSCrypt** of **InviZible Pro**.
- Note: Some services may crash when routing traffic through `tor` (set in **Using SOCKS5 proxy** in **TrackerControl**), change the **Exit nodes** to the service's country or region of publication in **InviZible Pro** may help. Otherwise you may try disabling monitoring that app or stopping **Using SOCKS5 proxy** in **TrackerControl**, which compromise your privacy.
### **Check**
- Go to [https://check.torproject.org/](https://check.torproject.org/) to check if your Tor route succeeded. If yes, you will see  "Congratulations. This browser is configured to use Tor." (assume the page's language is set to English).
- Go to [https://whatismyipaddress.com/](https://whatismyipaddress.com/) or other IP checking websites to see wether it's your device's IP. If not, your Tor route is successful.
- Go to [https://www.dnsleaktest.com/results.html](https://www.dnsleaktest.com/results.html) or other DNS leak testing websites to check if there is a DNS leak. You will see the DNS servers you set in **DNSCrypt Settings** in **InviZible Pro** instead of your ISP's servers if there's no DNS leak.