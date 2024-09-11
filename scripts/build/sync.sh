ACTOR=$1
ACTOR_ID=$2

git config --global user.name $ACTOR
git config --global user.email "$ACTOR_ID+$ACTOR@users.noreply.github.com"
git clone https://github.com/ingydotnet/git-subrepo /tmp/git-subrepo 
source /tmp/git-subrepo/.rc
source ./scripts/build/repo.sh
CloneRepoConfig
LoadRepoConfig
UpdateRepoConfig