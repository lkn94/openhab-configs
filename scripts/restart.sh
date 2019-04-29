sudo service pilight stop
sleep 10
sudo iptables -A INPUT -s 127.0.0.1 -j ACCEPT
sudo service pilight start
sudo ln -s /dev/lirc0 /dev/lirc
sudo lircd
sudo service openhab2 start
