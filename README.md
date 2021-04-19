# scn.stanford.edu
Website for Stanford Concert Network 2020-2021. Originally masterminded by Cris Sciutto. Updated and improved in 2021 by Cooper Reed.

STEP 0: Base Environment; Git, Homebrew, Ruby, chruby
To clone the repository and develop for this site, you need to have Git on your machine. You also must have Ruby and a Ruby client like rbenv or chruby installed. Cooper recommends chruby + best way to install is through homebrew. There's an awesome guide on getting set up with these technologies here:
https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/?utm_source=stackoverflow
Note: it's a good idea to check the versions of each of these pieces of software. In most cases this can be done by typing in terminal:
$(software) -v 

Once set up with all the above, ths command will fix any problems and get your packages talking to one another:
$ brew upgrade

If you'd like to use chruby(recommended), make sure you uninstall rbenv (https://github.com/rbenv/rbenv#uninstalling-rbenv)

STEP 1: Target your Ruby version in PATH
Make sure your preferred Ruby version is part of your PATH in either .bash_profile or .zsh. If you're not sure which you'll be using, open a new terminal window and enter the below:

$ ls -la
//shows a list of user files which should include either .bash_profile or .zsh

$nano (desired filename)
//opens desired file in nano text editor
//example: nano .bash_profile

Then add this line to target your version of Ruby:
export PATH="$PATH/.gem/ruby/2.7.0/bin:$PATH"

STEP 2: Jekyll
This website uses JEKYLL, a tool which uses the Ruby language to conveniently run builds of the site on a local server. 

Instructions on setting up Jekyll on your local machine can be found here:
https://jekyllrb.com/docs/

STEP 2: Jekyll Troubleshooting
Sometimes Jekyll commands will not be recognized, even if it's on your machine. If you run into problems like this, make sure to install Jekyll in an accessible place like /usr/local/bin using this command in linux:
$ gem install -n /usr/local/bin jekyll

STEP 4: START IT UP!
$cd scn.stanford.edu
$bundle exec jekyll serve

Then browse to http://localhost:4000 and you should see a production build running!
