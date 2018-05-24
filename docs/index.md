<!doctype html>
<html class="default no-js">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>FurnishJS</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
<header>
	<div class="tsd-page-toolbar">
		<div class="container">
			<div class="table-wrap">
				<div class="table-cell" id="tsd-search" data-index="assets/js/search.js" data-base=".">
					<div class="field">
						<label for="tsd-search-field" class="tsd-widget search no-caption">Search</label>
						<input id="tsd-search-field" type="text" />
					</div>
					<ul class="results">
						<li class="state loading">Preparing search index...</li>
						<li class="state failure">The search index is not available</li>
					</ul>
					<a href="index.html" class="title">FurnishJS</a>
				</div>
				<div class="table-cell" id="tsd-widgets">
					<div id="tsd-filter">
						<a href="#" class="tsd-widget options no-caption" data-toggle="options">Options</a>
						<div class="tsd-filter-group">
							<div class="tsd-select" id="tsd-filter-visibility">
								<span class="tsd-select-label">All</span>
								<ul class="tsd-select-list">
									<li data-value="public">Public</li>
									<li data-value="protected">Public/Protected</li>
									<li data-value="private" class="selected">All</li>
								</ul>
							</div>
							<input type="checkbox" id="tsd-filter-inherited" checked />
							<label class="tsd-widget" for="tsd-filter-inherited">Inherited</label>
							<input type="checkbox" id="tsd-filter-externals" checked />
							<label class="tsd-widget" for="tsd-filter-externals">Externals</label>
							<input type="checkbox" id="tsd-filter-only-exported" />
							<label class="tsd-widget" for="tsd-filter-only-exported">Only exported</label>
						</div>
					</div>
					<a href="#" class="tsd-widget menu no-caption" data-toggle="menu">Menu</a>
				</div>
			</div>
		</div>
	</div>
	<div class="tsd-page-title">
		<div class="container">
			<ul class="tsd-breadcrumb">
				<li>
					<a href="globals.html">Globals</a>
				</li>
			</ul>
			<h1> FurnishJS</h1>
		</div>
	</div>
</header>
<div class="container container-main">
	<div class="row">
		<div class="col-8 col-content">
			<div class="tsd-panel tsd-typography">
				<h1 id="furnishjs">FurnishJS</h1>
				<blockquote>
					<p>A framework using TensorFlow.hs for Deep Reinforcement Learning</p>
				</blockquote>
				<p><a href="https://badge.fury.io/js/furnishjs"><img src="https://badge.fury.io/js/furnishjs.svg" alt="npm version"></a></p>
				<p><code>FurnishJS</code> is a little library to create Reinforcement Learning environments with Javascript.
				It currently implements DQN algorithm, but aims to allow users to change easily algorithms, like for instance A3C or Sarsa.</p>
				<p>The library is using TensorFlow.js as a computing background, enabling the use of WebGL to empower computations.</p>
				<h2 id="getting-started">Getting started</h2>
				<h2 id="installation">Installation</h2>
				<p>FurnishJS is available as a standalone or as a NPM package. As usual, you can use </p>
				<pre><code class="lang-bash">$ npm install furnishjs
</code></pre>
				<h2 id="usage">Usage</h2>
				<p>With Furnish, you have an environment organized as if your agents were part of a &quot;school&quot;. The idea is that you are managing
					an <code>Academy</code>, possessing <code>Teachers</code> and <code>Agents</code> (Students). You add <code>Teachers</code> and assign <code>Agents</code> to them. At each step of
				your world, you just need to give the <code>Academy</code> each <code>Teacher</code>&#39;s input, which will handle everything concerning learning.</p>
				<p>Because you are in Reinforcement Learning, you need a Neural Network model in order for your agents to learn. TFJS&#39;s <code>Model</code> is
					embedded into a wrapper, and you just need to precise what type of layers you need, and that&#39;s all !
				For instance :</p>
				<pre><code class="lang-javascript">
<span class="hljs-keyword">const</span> modelConfig = {                 <span class="hljs-comment">// Here we exactly have the tfjs's model configuration</span>
    name: <span class="hljs-string">'furnish-model'</span>             <span class="hljs-comment">// You could give there layers[], but no need ...</span>
};

<span class="hljs-keyword">const</span> modelFitConfig = {              <span class="hljs-comment">// Exactly the same idea here by using tfjs's model's</span>
    epochs: <span class="hljs-number">1</span>,                        <span class="hljs-comment">// fit config.</span>
    stepsPerEpoch: <span class="hljs-number">16</span>
};

<span class="hljs-keyword">const</span> numActions = <span class="hljs-number">2</span>;                 <span class="hljs-comment">// The number of actions your agent can choose to do</span>
<span class="hljs-keyword">const</span> inputSize = <span class="hljs-number">100</span>;                <span class="hljs-comment">// Inputs size (10x10 image for instance)</span>
<span class="hljs-keyword">const</span> temporalWindow = <span class="hljs-number">1</span>;             <span class="hljs-comment">// The window of data which will be sent yo your agent</span>
                                      <span class="hljs-comment">// For instance the x previous inputs, and what actions the agent took</span>

<span class="hljs-keyword">const</span> totalInputSize = inputSize * temporalWindow + numActions * temporalWindow + inputSize;

<span class="hljs-comment">// Now we initialize our model, and start adding layers</span>
<span class="hljs-keyword">const</span> model = <span class="hljs-keyword">new</span> Furnish.model(modelConfig, modelFitConfig);
<span class="hljs-comment">// Input layer</span>
model.addLayer({
    <span class="hljs-attr">layerType</span>: <span class="hljs-string">"DENSE"</span>, 
    <span class="hljs-attr">units</span>: <span class="hljs-number">32</span>, 
    <span class="hljs-attr">inputShape</span>: [totalInputSize], 
    <span class="hljs-attr">activation</span>: <span class="hljs-string">'relu'</span>
});
<span class="hljs-comment">// Hidden layer</span>
model.addLayer({<span class="hljs-attr">layerType</span>: <span class="hljs-string">"DENSE"</span>, <span class="hljs-attr">units</span>: <span class="hljs-number">32</span>, <span class="hljs-attr">activation</span>: <span class="hljs-string">'relu'</span>});
<span class="hljs-comment">// Output layer</span>
model.addLayer({<span class="hljs-attr">layerType</span>: <span class="hljs-string">"DENSE"</span>, <span class="hljs-attr">units</span>: numActions, <span class="hljs-attr">activation</span>: <span class="hljs-string">'relu'</span>});

<span class="hljs-comment">// Finally compile the model, we also exactly use tfjs's optimizers and loss functions</span>
<span class="hljs-comment">// (So feel free to choose one among tfjs's)</span>
model.compile({<span class="hljs-attr">loss</span>: <span class="hljs-string">'meanSquaredError'</span>, <span class="hljs-attr">optimizer</span>: <span class="hljs-string">'sgd'</span>})

</code></pre>
				<p>Now that our model is ready, let&#39;s create an agent...</p>
				<pre><code class="lang-javascript">
<span class="hljs-comment">// Every single field here is optionnal, and has a default value. Be careful, it may not</span>
<span class="hljs-comment">// fit your needs ...</span>

<span class="hljs-keyword">const</span> teacherConfig = {
    <span class="hljs-attr">lessonsQuantity</span>: <span class="hljs-number">10</span>,                   <span class="hljs-comment">// Number of training lessons before only testing agent</span>
    lessonsLength: <span class="hljs-number">100</span>,                    <span class="hljs-comment">// The length of each lesson (in quantity of updates)</span>
    lessonsWithRandom: <span class="hljs-number">2</span>,                  <span class="hljs-comment">// How many random lessons before updating epsilon's value</span>
    epsilon: <span class="hljs-number">1</span>,                            <span class="hljs-comment">// Q-Learning values and so on ...</span>
    epsilonDecay: <span class="hljs-number">0.995</span>,                   <span class="hljs-comment">// (Random factor epsilon, decaying over time)</span>
    epsilonMin: <span class="hljs-number">0.05</span>,
    <span class="hljs-attr">gamma</span>: <span class="hljs-number">0.8</span>                             <span class="hljs-comment">// (Gamma = 1 : agent cares really much about future rewards)</span>
};

<span class="hljs-keyword">const</span> agentConfig = {
    <span class="hljs-attr">memorySize</span>: <span class="hljs-number">5000</span>,                      <span class="hljs-comment">// The size of the agent's memory (Q-Learning)</span>
    batchSize: <span class="hljs-number">128</span>,                        <span class="hljs-comment">// How many tensors will be given to the network when fit</span>
    temporalWindow: temporalWindow         <span class="hljs-comment">// The temporal window giving previous inputs &amp; actions</span>
};

<span class="hljs-keyword">const</span> academy = <span class="hljs-keyword">new</span> Furnish.Academy();    <span class="hljs-comment">// First we need an academy to host everything</span>
<span class="hljs-keyword">const</span> teacher = academy.addTeacher(teacherConfig);
<span class="hljs-keyword">const</span> agent = academy.addAgent(agentConfig);

academy.assignTeacherToAgent(agent, teacher);

</code></pre>
				<p>And that&#39;s it ! Now you just need to update during your world emulation if the agent gets rewards, and
				feed inputs to it.</p>
				<pre><code class="lang-javascript"><span class="hljs-comment">// Nice event occuring during world emulation</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">OnSpecialGoodEvent</span>(<span class="hljs-params"></span>) </span>{
    academy.addRewardToAgent(agent, <span class="hljs-number">1.0</span>)        <span class="hljs-comment">// Give a nice reward if the agent did something nice !</span>
}

<span class="hljs-comment">// Bad event</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">OnSpecialBadEvent</span>(<span class="hljs-params"></span>) </span>{
    academy.addRewardToAgent(agent, <span class="hljs-number">-1.0</span>)        <span class="hljs-comment">// Give a bad reward to the agent if he did something wrong</span>
}

<span class="hljs-comment">// Animation loop, update loop, whatever loop you want</span>
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">step</span>(<span class="hljs-params">time</span>) </span>{

    <span class="hljs-keyword">let</span> inputs = getInputs()           <span class="hljs-comment">// Need to give a number[] of your inputs for one teacher.</span>
    <span class="hljs-keyword">await</span> academy.step([               <span class="hljs-comment">// Let the magic operate ...</span>
        {<span class="hljs-attr">teacherName</span>: teacher, <span class="hljs-attr">inputs</span>: inputs}
    ]);

}

<span class="hljs-comment">// Start your loop (/!\ for your environment, not specific to FurnishJS.</span>
requestAnimationFrame(step);
</code></pre>
				<p>Rewards are reset to 0 at each new step.</p>
				<p>Do not forget to include the javascript :</p>
				<pre><code class="lang-html">    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"/path/to/your/lib/furnish.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
			</div>
		</div>
		<div class="col-4 col-menu menu-sticky-wrap menu-highlight">
			<nav class="tsd-navigation primary">
				<ul>
					<li class="globals  ">
						<a href="globals.html"><em>Globals</em></a>
					</li>
					<li class="label tsd-is-external">
						<span>Internals</span>
					</li>
					<li class=" tsd-kind-external-module">
						<a href="modules/_src_furnish_.html">"src/furnish"</a>
					</li>
					<li class=" tsd-kind-external-module">
						<a href="modules/_src_furnish_academy_.html">"src/furnish/academy"</a>
					</li>
					<li class=" tsd-kind-external-module">
						<a href="modules/_src_furnish_agent_.html">"src/furnish/agent"</a>
					</li>
					<li class=" tsd-kind-external-module">
						<a href="modules/_src_furnish_memory_.html">"src/furnish/memory"</a>
					</li>
					<li class=" tsd-kind-external-module">
						<a href="modules/_src_furnish_misc_data_source_.html">"src/furnish/misc/data_<wbr>source"</a>
					</li>
					<li class=" tsd-kind-external-module">
						<a href="modules/_src_furnish_misc_learning_data_logger_.html">"src/furnish/misc/learning_<wbr>data_<wbr>logger"</a>
					</li>
					<li class=" tsd-kind-external-module">
						<a href="modules/_src_furnish_misc_typed_window_.html">"src/furnish/misc/typed_<wbr>window"</a>
					</li>
					<li class=" tsd-kind-external-module">
						<a href="modules/_src_furnish_model_.html">"src/furnish/model"</a>
					</li>
					<li class=" tsd-kind-external-module">
						<a href="modules/_src_furnish_teacher_.html">"src/furnish/teacher"</a>
					</li>
					<li class="label tsd-is-external">
						<span>Externals</span>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_browser_util_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/browser_<wbr>util.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_doc_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/doc.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_engine_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/engine.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_environment_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/environment.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_globals_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/globals.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_gradients_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/gradients.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_index_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_io_browser_files_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/io/browser_<wbr>files.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_io_browser_http_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/io/browser_<wbr>http.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_io_indexed_db_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/io/indexed_<wbr>db.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_io_io_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/io/io.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_io_io_utils_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/io/io_<wbr>utils.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_io_local_storage_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/io/local_<wbr>storage.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_io_model_management_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/io/model_<wbr>management.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_io_router_registry_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/io/router_<wbr>registry.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_io_types_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/io/types.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_io_weights_loader_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/io/weights_<wbr>loader.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_kernels_backend_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/kernels/backend.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_kernels_backend_cpu_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/kernels/backend_<wbr>cpu.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_kernels_backend_webgl_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/kernels/backend_<wbr>webgl.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_kernels_webgl_gpgpu_context_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/kernels/webgl/gpgpu_<wbr>context.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_kernels_webgl_gpgpu_util_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/kernels/webgl/gpgpu_<wbr>util.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_kernels_webgl_tex_util_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/kernels/webgl/tex_<wbr>util.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_kernels_webgl_texture_manager_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/kernels/webgl/texture_<wbr>manager.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_kernels_webgl_webgl_types_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/kernels/webgl/webgl_<wbr>types.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_kernels_webgl_webgl_util_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/kernels/webgl/webgl_<wbr>util.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_array_ops_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/array_<wbr>ops.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_batchnorm_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/batchnorm.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_binary_ops_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/binary_<wbr>ops.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_compare_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/compare.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_concat_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/concat.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_conv_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/conv.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_conv_util_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/conv_<wbr>util.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_image_ops_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/image_<wbr>ops.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_linalg_ops_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/linalg_<wbr>ops.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_logical_ops_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/logical_<wbr>ops.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_loss_ops_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/loss_<wbr>ops.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_lrn_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/lrn.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_lstm_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/lstm.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_matmul_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/matmul.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_moving_average_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/moving_<wbr>average.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_norm_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/norm.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_operation_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/operation.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_ops_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/ops.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_pool_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/pool.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_reduction_ops_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/reduction_<wbr>ops.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_reverse_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/reverse.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_slice_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/slice.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_softmax_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/softmax.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_strided_slice_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/strided_<wbr>slice.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_transpose_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/transpose.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_ops_unary_ops_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/ops/unary_<wbr>ops.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_optimizers_adadelta_optimizer_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/optimizers/adadelta_<wbr>optimizer.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_optimizers_adagrad_optimizer_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/optimizers/adagrad_<wbr>optimizer.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_optimizers_adam_optimizer_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/optimizers/adam_<wbr>optimizer.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_optimizers_adamax_optimizer_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/optimizers/adamax_<wbr>optimizer.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_optimizers_momentum_optimizer_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/optimizers/momentum_<wbr>optimizer.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_optimizers_optimizer_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/optimizers/optimizer.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_optimizers_optimizer_constructors_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/optimizers/optimizer_<wbr>constructors.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_optimizers_rmsprop_optimizer_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/optimizers/rmsprop_<wbr>optimizer.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_optimizers_sgd_optimizer_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/optimizers/sgd_<wbr>optimizer.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_serialization_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/serialization.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_tensor_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/tensor.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_test_util_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/test_<wbr>util.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_tracking_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/tracking.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_train_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/train.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_types_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/types.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_util_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/util.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_version_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/version.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_core_dist_webgl_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>core/dist/webgl.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_activations_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/activations.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_callbacks_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/callbacks.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_common_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/common.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_constraints_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/constraints.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_engine_topology_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/engine/topology.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_engine_training_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/engine/training.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_exports_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/exports.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_index_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_initializers_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/initializers.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_layers_advanced_activations_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/layers/advanced_<wbr>activations.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_layers_convolutional_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/layers/convolutional.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_layers_convolutional_depthwise_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/layers/convolutional_<wbr>depthwise.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_layers_core_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/layers/core.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_layers_embeddings_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/layers/embeddings.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_layers_merge_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/layers/merge.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_layers_normalization_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/layers/normalization.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_layers_padding_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/layers/padding.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_layers_pooling_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/layers/pooling.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_layers_recurrent_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/layers/recurrent.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_layers_wrappers_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/layers/wrappers.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_models_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/models.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_regularizers_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/regularizers.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_types_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/types.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_variables_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/variables.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_layers_dist_version_d_.html">"node_<wbr>modules/@tensorflow/tfjs-<wbr>layers/dist/version.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__tensorflow_tfjs_dist_index_d_.html">"node_<wbr>modules/@tensorflow/tfjs/dist/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_chai_index_d_.html">"node_<wbr>modules/@types/chai/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_events_index_d_.html">"node_<wbr>modules/@types/events/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_fs_extra_index_d_.html">"node_<wbr>modules/@types/fs-<wbr>extra/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_glob_index_d_.html">"node_<wbr>modules/@types/glob/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_handlebars_index_d_.html">"node_<wbr>modules/@types/handlebars/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_highlight_js_index_d_.html">"node_<wbr>modules/@types/highlight.js/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_lodash_common_array_d_.html">"node_<wbr>modules/@types/lodash/common/array.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_lodash_common_collection_d_.html">"node_<wbr>modules/@types/lodash/common/collection.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_lodash_common_common_d_.html">"node_<wbr>modules/@types/lodash/common/common.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_lodash_common_date_d_.html">"node_<wbr>modules/@types/lodash/common/date.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_lodash_common_function_d_.html">"node_<wbr>modules/@types/lodash/common/function.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_lodash_common_lang_d_.html">"node_<wbr>modules/@types/lodash/common/lang.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_lodash_common_math_d_.html">"node_<wbr>modules/@types/lodash/common/math.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_lodash_common_number_d_.html">"node_<wbr>modules/@types/lodash/common/number.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_lodash_common_object_d_.html">"node_<wbr>modules/@types/lodash/common/object.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_lodash_common_seq_d_.html">"node_<wbr>modules/@types/lodash/common/seq.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_lodash_common_string_d_.html">"node_<wbr>modules/@types/lodash/common/string.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_lodash_common_util_d_.html">"node_<wbr>modules/@types/lodash/common/util.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_lodash_index_d_.html">"node_<wbr>modules/@types/lodash/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_marked_index_d_.html">"node_<wbr>modules/@types/marked/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_minimatch_index_d_.html">"node_<wbr>modules/@types/minimatch/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_mocha_index_d_.html">"node_<wbr>modules/@types/mocha/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_node_index_d_.html">"node_<wbr>modules/@types/node/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_node_inspector_d_.html">"node_<wbr>modules/@types/node/inspector.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_shelljs_index_d_.html">"node_<wbr>modules/@types/shelljs/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_sinon_chai_index_d_.html">"node_<wbr>modules/@types/sinon-<wbr>chai/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_sinon_index_d_.html">"node_<wbr>modules/@types/sinon/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_uuid_index_d_.html">"node_<wbr>modules/@types/uuid/index.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules__types_uuid_interfaces_d_.html">"node_<wbr>modules/@types/uuid/interfaces.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.html">"node_<wbr>modules/typedoc/node_<wbr>modules/typescript/lib/lib.dom.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_iterable_d_.html">"node_<wbr>modules/typedoc/node_<wbr>modules/typescript/lib/lib.dom.iterable.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules_typedoc_node_modules_typescript_lib_lib_es2015_collection_d_.html">"node_<wbr>modules/typedoc/node_<wbr>modules/typescript/lib/lib.es2015.collection.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules_typedoc_node_modules_typescript_lib_lib_es2015_core_d_.html">"node_<wbr>modules/typedoc/node_<wbr>modules/typescript/lib/lib.es2015.core.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules_typedoc_node_modules_typescript_lib_lib_es2015_d_.html">"node_<wbr>modules/typedoc/node_<wbr>modules/typescript/lib/lib.es2015.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules_typedoc_node_modules_typescript_lib_lib_es2015_generator_d_.html">"node_<wbr>modules/typedoc/node_<wbr>modules/typescript/lib/lib.es2015.generator.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules_typedoc_node_modules_typescript_lib_lib_es2015_iterable_d_.html">"node_<wbr>modules/typedoc/node_<wbr>modules/typescript/lib/lib.es2015.iterable.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules_typedoc_node_modules_typescript_lib_lib_es2015_promise_d_.html">"node_<wbr>modules/typedoc/node_<wbr>modules/typescript/lib/lib.es2015.promise.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules_typedoc_node_modules_typescript_lib_lib_es2015_proxy_d_.html">"node_<wbr>modules/typedoc/node_<wbr>modules/typescript/lib/lib.es2015.proxy.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules_typedoc_node_modules_typescript_lib_lib_es2015_reflect_d_.html">"node_<wbr>modules/typedoc/node_<wbr>modules/typescript/lib/lib.es2015.reflect.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules_typedoc_node_modules_typescript_lib_lib_es2015_symbol_d_.html">"node_<wbr>modules/typedoc/node_<wbr>modules/typescript/lib/lib.es2015.symbol.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules_typedoc_node_modules_typescript_lib_lib_es2015_symbol_wellknown_d_.html">"node_<wbr>modules/typedoc/node_<wbr>modules/typescript/lib/lib.es2015.symbol.wellknown.d"</a>
					</li>
					<li class=" tsd-kind-external-module tsd-is-external">
						<a href="modules/_node_modules_typedoc_node_modules_typescript_lib_lib_es5_d_.html">"node_<wbr>modules/typedoc/node_<wbr>modules/typescript/lib/lib.es5.d"</a>
					</li>
				</ul>
			</nav>
			<nav class="tsd-navigation secondary menu-sticky">
				<ul class="before-current">
				</ul>
			</nav>
		</div>
	</div>
</div>
<footer class="with-border-bottom">
	<div class="container">
		<h2>Legend</h2>
		<div class="tsd-legend-group">
			<ul class="tsd-legend">
				<li class="tsd-kind-module"><span class="tsd-kind-icon">Module</span></li>
				<li class="tsd-kind-object-literal"><span class="tsd-kind-icon">Object literal</span></li>
				<li class="tsd-kind-variable"><span class="tsd-kind-icon">Variable</span></li>
				<li class="tsd-kind-function"><span class="tsd-kind-icon">Function</span></li>
				<li class="tsd-kind-function tsd-has-type-parameter"><span class="tsd-kind-icon">Function with type parameter</span></li>
				<li class="tsd-kind-index-signature"><span class="tsd-kind-icon">Index signature</span></li>
				<li class="tsd-kind-type-alias"><span class="tsd-kind-icon">Type alias</span></li>
			</ul>
			<ul class="tsd-legend">
				<li class="tsd-kind-enum"><span class="tsd-kind-icon">Enumeration</span></li>
				<li class="tsd-kind-enum-member"><span class="tsd-kind-icon">Enumeration member</span></li>
				<li class="tsd-kind-property tsd-parent-kind-enum"><span class="tsd-kind-icon">Property</span></li>
				<li class="tsd-kind-method tsd-parent-kind-enum"><span class="tsd-kind-icon">Method</span></li>
			</ul>
			<ul class="tsd-legend">
				<li class="tsd-kind-interface"><span class="tsd-kind-icon">Interface</span></li>
				<li class="tsd-kind-interface tsd-has-type-parameter"><span class="tsd-kind-icon">Interface with type parameter</span></li>
				<li class="tsd-kind-constructor tsd-parent-kind-interface"><span class="tsd-kind-icon">Constructor</span></li>
				<li class="tsd-kind-property tsd-parent-kind-interface"><span class="tsd-kind-icon">Property</span></li>
				<li class="tsd-kind-method tsd-parent-kind-interface"><span class="tsd-kind-icon">Method</span></li>
				<li class="tsd-kind-index-signature tsd-parent-kind-interface"><span class="tsd-kind-icon">Index signature</span></li>
			</ul>
			<ul class="tsd-legend">
				<li class="tsd-kind-class"><span class="tsd-kind-icon">Class</span></li>
				<li class="tsd-kind-class tsd-has-type-parameter"><span class="tsd-kind-icon">Class with type parameter</span></li>
				<li class="tsd-kind-constructor tsd-parent-kind-class"><span class="tsd-kind-icon">Constructor</span></li>
				<li class="tsd-kind-property tsd-parent-kind-class"><span class="tsd-kind-icon">Property</span></li>
				<li class="tsd-kind-method tsd-parent-kind-class"><span class="tsd-kind-icon">Method</span></li>
				<li class="tsd-kind-accessor tsd-parent-kind-class"><span class="tsd-kind-icon">Accessor</span></li>
				<li class="tsd-kind-index-signature tsd-parent-kind-class"><span class="tsd-kind-icon">Index signature</span></li>
			</ul>
			<ul class="tsd-legend">
				<li class="tsd-kind-constructor tsd-parent-kind-class tsd-is-inherited"><span class="tsd-kind-icon">Inherited constructor</span></li>
				<li class="tsd-kind-property tsd-parent-kind-class tsd-is-inherited"><span class="tsd-kind-icon">Inherited property</span></li>
				<li class="tsd-kind-method tsd-parent-kind-class tsd-is-inherited"><span class="tsd-kind-icon">Inherited method</span></li>
				<li class="tsd-kind-accessor tsd-parent-kind-class tsd-is-inherited"><span class="tsd-kind-icon">Inherited accessor</span></li>
			</ul>
			<ul class="tsd-legend">
				<li class="tsd-kind-property tsd-parent-kind-class tsd-is-protected"><span class="tsd-kind-icon">Protected property</span></li>
				<li class="tsd-kind-method tsd-parent-kind-class tsd-is-protected"><span class="tsd-kind-icon">Protected method</span></li>
				<li class="tsd-kind-accessor tsd-parent-kind-class tsd-is-protected"><span class="tsd-kind-icon">Protected accessor</span></li>
			</ul>
			<ul class="tsd-legend">
				<li class="tsd-kind-property tsd-parent-kind-class tsd-is-private"><span class="tsd-kind-icon">Private property</span></li>
				<li class="tsd-kind-method tsd-parent-kind-class tsd-is-private"><span class="tsd-kind-icon">Private method</span></li>
				<li class="tsd-kind-accessor tsd-parent-kind-class tsd-is-private"><span class="tsd-kind-icon">Private accessor</span></li>
			</ul>
			<ul class="tsd-legend">
				<li class="tsd-kind-property tsd-parent-kind-class tsd-is-static"><span class="tsd-kind-icon">Static property</span></li>
				<li class="tsd-kind-call-signature tsd-parent-kind-class tsd-is-static"><span class="tsd-kind-icon">Static method</span></li>
			</ul>
		</div>
	</div>
</footer>
<div class="container tsd-generator">
	<p>Generated using <a href="http://typedoc.org/" target="_blank">TypeDoc</a></p>
</div>
<div class="overlay"></div>
<script src="assets/js/main.js"></script>
<script>if (location.protocol == 'file:') document.write('<script src="assets/js/search.js"><' + '/script>');</script>
</body>
</html>
