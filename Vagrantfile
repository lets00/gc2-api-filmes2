Vagrant.configure("2") do |config|

    config.vm.provider "virtualbox" do |vb|
        vb.gui = false
    end

    config.vm.define "VM1" do |vm1|
        vm1.vm.box = "ubuntu/focal64" 
        vm1.vm.hostname = "vm1"
        vm1.vm.network "private_network", ip: "192.168.56.10" 
        vm1.vm.provider "virtualbox" do |vb|
            vb.memory = 1024 
        end

        vm1.vm.provision "shell", inline: <<-SHELL
            sudo apt-get update
            sudo apt-get install -y curl wget
            curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
            sudo apt-get install -y nodejs
            node -v  
        SHELL
    end

    config.vm.define "VM2" do |vm2|
        vm2.vm.box = "ubuntu/focal64" 
        vm2.vm.hostname = "vm2"
        vm2.vm.network "private_network", ip: "192.168.56.11" 
        vm2.vm.provider "virtualbox" do |vb|
            vb.memory = 2048 
        end

        vm2.vm.synced_folder ".", "/vagrant_data"

        vm2.vm.provision "shell", inline: <<-SHELL
            sudo apt-get update
            curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
            sudo apt-get install -y nodejs
            node -v
            cd /vagrant_data
            npm install
            npm start &
        SHELL
    end
end
