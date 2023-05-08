@echo off
scp -r oldsrc\* evrhel@vergil.u.washington.edu:~/public_html
scp -r src\* evrhel@attu1.cs.washington.edu:/cse/web/homes/evrhel
start "" https://homes.cs.washington.edu/~evrhel/