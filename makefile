git:
	git checkout $b
	git add .
	git commit -m "$d"
	git push --set-upstream origin $b