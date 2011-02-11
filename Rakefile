task :default => [:"juicer:css"]

namespace :juicer do
  desc 'Merges stylesheets'
    task :css do
      sh 'juicer merge --force _site/style/master.css'
    end
end

namespace :rsync do
  desc "--dry-run rsync"
    task :dryrun => :"juicer:css" do
      system('rsync _site/ -ave ssh --dry-run --delete studiomo@studiomohawk.com:www/css/')
    end

  desc "rsync"
    task :rsync => :"rsync:dryrun" do
      system('rsync -avz -delete -e _site/ ssh studiomo@studiomohawk.com:/www/css')
    end
end

desc 'List all draft posts'
task :drafts do
    puts `grep -l 'published: false' _posts/*`
end
