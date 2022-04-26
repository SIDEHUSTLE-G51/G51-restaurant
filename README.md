# SH-G51 Restaurant

This readme aims to simplify and guide the way on how to make your first contribution. If you are looking to make your first contribution, follow the steps below.

# Step 1

## Clone the repository

Now clone the main repo link here [(https://github.com/SIDEHUSTLE-G51/G51-restaurant.git)] to your machine. Having accepting the invites from nick you will have access to pull & push from this repo, Go to your GitHub account, click on the code button and then click the copy to clipboard icon which is the code above.

Open a terminal and navigate to the folder you wish to work from and run the following git command:

```
git clone "url you just copied"
```

For example:

```
git clone https://github.com/SIDEHUSTLE-G51/G51-restaurant.git
```

### Having clone the repo, you will have a fresh copy of the updated code

#UI Concept Designs

![Home](https://user-images.githubusercontent.com/21057939/165234921-98fc4a61-50fc-412f-a5ea-5268dc07bd38.png)


# Step 2

Navigate into the folder using Cd { Change directory }

```
cd "folder name"
```

# Step 3

install the necessary require dependency [node_modules] by using the following npm command:

```
npm install
```

# Step 4

## For Teammate

for people working on same page together, run the following git command:

```
git branch -a
```

The above code list all the branches avaliable.

Run the following git commit to switch to the branches you desire to work on.

```
git checkout "branch name"
```

---

### **Note:** adding the flag -b is not needed as the branch will have already been created in this case

---

for example

```
git checkout about
```

# Step 5

after switching to your desired branch, run the following git command
**to fetch any update made to the branch before writing your own line of code:**

```
git pull
```

# Step 6

Having write your own line of code for a particular branch, kindly push to the branch using the following git command

```
git push -u origin "branch name"

```

for example

```
git push -u origin aboutPage
```
