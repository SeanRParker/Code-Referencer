// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_tasks.js` rather than `tasks.js`, because
// we don't want to create an `/tasks/tasks` route — the leading
// underscore tells Sapper not to do that.

const tasks = [
	{
		title: 'Declaring Variables in JS',
		slug: 'declare-vars-in-js',
		html: `
		<pre>
			<code>
			let dad = "Homer"
			
			// to ressign value
			dad = "Ned Flanders"
			</code>
		</pre>

		<section>
			<p class="description">Variables allow you to store information for use later.</p>
			<p>Once it's already declared, you no longer need to use let to change a variables value.</p>
		</section>
		`
	}
];

tasks.forEach(task => {
	task.html = task.html.replace(/^\t{3}/gm, '');
});

export default tasks;
