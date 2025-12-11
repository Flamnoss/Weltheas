---
title: How to make a change to this wiki
draft: false
tags:
  - Guides
---
- - -

## Before You Begin

Please read and follow:
- **Wiki Rules:** [[! Wiki Rules !]]
- **Templates** (for new pages): [[Templates]]
- You’ll also **need a GitHub account** to submit changes.
- You need some basic knowledge on Markdown, here is a [handy guide](https://help.obsidian.md/callouts)
- **Main repository:** https://github.com/Myrdincx/Weltheas

All wiki pages for Weltheas are stored inside the main GitHub repository under:
`/content/`
All pages are written in **Markdown**, and all images and media files belong in:
`/content/media/`

Anyone can propose changes through a **GitHub Pull Request (PR).**
This guide explains how to edit existing pages, create new pages, upload images, and follow the wiki rules.

## 1. Making small changes
### Step 1 — Find the page you want to edit
1. Open the repo: [https://github.com/Myrdincx/Weltheas](https://github.com/Myrdincx/Weltheas)
2. Open the **`content/`** folder
3. Browse to the Markdown file you want to edit (`.md`)

### Step 2 — Edit the page
- Click the **✏️ Edit** button in the top-right
- GitHub will automatically create a **fork** if needed

### Step 3 — Make your changes
You may:
- Fix typos
- Improve clarity
- Add new sections
- Insert links or tables
- Update outdated information
- Add references to other pages
- Add embedded images (see section below)

All changes **must follow the Wiki Rules**.

### Step 4 — Save your changes
Use a clear commit message such as:
- `Corrected city description for Arvendal`
- `Updated trade routes map references`
- `Fixed formatting in Deities list`

Click **Propose changes**.

### Step 5 — Create a Pull Request
Describe:
- What you changed
- Why you changed it

A maintainer will review and merge it.

## 2. Creating a New Page

> [!important] IMPORTANT
> Before creating a new page, you must use the proper template:
> [[Templates]]

#### How to create a new Markdown page
1. Open the `content/` folder in GitHub, head over to the folder you’d like to add a file into.  
2. Click **Add file → Create new file**
3. Name your file like this: `content/<category>/<Your-Page-Name>.md`

Examples:
```
content/Characters/Myrdin Windheim.md
content/Weltheas/religion.md
content/Wiki Guides/How to add a page.md
```
4. Paste the correct **template** into the new page 
5. Add your content following the rules
6. Commit → Propose changes → Create Pull Request

#### Don’t forget to link your new page
Add links to/from:
- Category overview pages
- Related wiki pages
- Navigation lists
- Relevant sections in lore or rules

Use **relative links**, e.g.:
`[Read about the Religions](../Weltheas/religion.md)`

## 3. Adding Images and Other Files
#### Where images belong
All images, maps, artwork, diagrams, and screenshots must go into:
`/content/media/`

#### How to upload an image
1. Open the `content/media/` folder
2. Click **Add file → Upload files**
3. Select your image(s)
4. Name them clearly and consistently following wiki rules
5. Commit → Propose changes → PR

#### Referencing an image in a page
Use standard Markdown:
`![](../media/your-image-name.png)`
or with alt text:
`![Map of the Western Isles](../media/Western-Isles-Map.png)`

#### File rules
- Use clear, descriptive file names  
- Only upload images you have permission to use
- Prefer `.png` or `.jpg`
- Keep file sizes reasonable (optimize large maps if possible)
- No copyrighted images without explicit permission

## 5. Formatting & Style Guidelines

### Use Markdown
The wiki uses standard Markdown:
- `#`, `##`, `###` headers
- Bold/italic text  
    "- Lists
- Tables
- Relative links
- Images
- Code blocks (for mechanics or structured info)

### Folder Structure
Place pages in the correct subfolder under `/content/`, such as:
```
/content/Weltheas/
/content/Characters/
/content/media/
/content/Wiki Guides/
/content/Religion/
```

### Callouts (Important Notes, Warnings, Rewrite Notices)

For all different kinds of callouts, please refer back to this handy wiki page :)
https://help.obsidian.md/callouts
Example:
```md
> [!info] <TITLE>
> Lorem ipsum dolor sit amet
```

**All callouts** must be placed on top of the page. 
For example:
```
---
title: <page title>
draft: false <either true or false>
tags:
  - <tags>
---
- - -
> [!info] <CALLOUT TITLE>
> Lorem ipsum dolor sit amet
- - -
blablabla :)
```


## 6. After You Submit a Pull Request
A maintainer will:
1. Review your changes
2. Suggest improvements (if needed)
3. Approve and merge the PR
4. Ask clarifying questions if something seems unclear or incorrect

You may submit a **Draft PR** if you want early feedback. (Make sure to set draft to yes) and mention that it is a draft in the PR itself.

# **7. Need Help?**
If you're unsure about:
- Templates
- Where to place a file
- How to structure a page
- How to upload images
- How to follow the Wiki Rules
- How to submit a PR

Just submit a PR anyway, we’ll help you refine it.  
We prefer contributions over perfection :)  
Alternatively, feel free to [dm myrdin on discord](<https://discord.com/users/300300616335622154>).