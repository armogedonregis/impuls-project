+++ Pages files:
Static site pages - about, contact and policy are located in these directory:

    PROJECT_DIRECTORY/src/components/screens/staticPages

+++ Styles for the static pages:
First of all, in Next.js you need to use css modules to locate styles at certain pages.
CSS modules for this pages you can see in these directory:

    PROJECT_DIRECTORY/staticPages/styles

Files has the same names as the pages. To use it write your css classes through using styles variable.
For example if you have .Content CSS class you need to write className={styles.Content} in tag that you want to style.

+++ Translation:
Example of language translation is in those page files - about.tsx, contact.tsx, policy.tsx
Translation files is located in subdirectories for each language in these directory:

    PROJECT_DIRECTORY/public/locales

"en" for english translation for example.
You need to edit only .json files with the same name as the page files has.
Using translation in details you can see in pages files. Read comments there.