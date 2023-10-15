<script>
  import language from './language.json'

  let darkmode = false
  let lang = 'en'
  let route = 'goal';

  $: translate = language[lang].translation
</script>

<div class="flex flex-wrap justify-between p-4 mx-auto max-w-3xl">
  <div class="">
    <h1 class="block font-sans text-5xl font-semibold leading-tight tracking-normal text-inherit antialiased">
      {translate["headline"]}
    </h1>
    <a 
      href="https://zummon.page/" 
      target="_blank"
      class="middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-dark="true"
    >
      {translate["sub-headline"]}
    </a>
  </div>
  <div class="">
    <div class="mb-4">
      <div class="inline-flex items-center">
        <label
          for="setting-dark-mode"
          class="mt-px mr-3 mb-0 cursor-pointer select-none font-light text-gray-700"
        >
          {translate["toggle-dark-mode"]}
        </label>
        <div class="relative inline-block h-4 w-8 cursor-pointer rounded-full">
          <input
            id="setting-dark-mode"
            type="checkbox"
            class="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-pink-500 peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
            bind:checked={darkmode}
          />
          <label
            for="setting-dark-mode"
            class="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
          >
            <div
              class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
              data-ripple-dark="true"
            ></div>
          </label>
        </div>
      </div>
    </div>
    <div class="">
      <div class="relative h-10 w-72 min-w-[200px]">
        <select class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          id="setting-lang"
        >
          {#each Object.keys(language) as value, index (`lang-${index}`)}
            <option value={value}>{language[value].name}</option>
          {/each}
        </select>
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          for="setting-lang"
        >
          {translate["change-language"]}
        </label>
      </div>
    </div>
  </div>
</div>

<div class="mx-auto max-w-3xl">
  <div class="relative right-0">
    <ul
      class="relative flex list-none flex-wrap rounded-xl bg-blue-gray-50/60 p-1"
      data-tabs="tabs"
      role="list"
    >
      <li class="z-30 flex-auto text-center">
        <button
          class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
          data-tab-target=""
          active=""
          role="tab"
          aria-selected="true"
          aria-controls="about"
        >
          <span class="ml-1">{translate['about']}</span>
        </button>
      </li>
      <li class="z-30 flex-auto text-center">
        <button
          class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
          data-tab-target=""
          role="tab"
          aria-selected="false"
          aria-controls="goal"
        >
          <span class="ml-1">{translate['goal']}</span>
        </button>
      </li>
      <li class="z-30 flex-auto text-center">
        <button
          class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
          data-tab-target=""
          role="tab"
          aria-selected="false"
          aria-controls="contact"
        >
          <span class="ml-1">{translate['contact']}</span>
        </button>
      </li>
    </ul>
    <div data-tab-content="" class="p-5">
      <div class="block opacity-100" id="about" role="tabpanel">
        <p class="block font-sans text-base font-light leading-relaxed text-inherit text-blue-gray-500 antialiased">
          {translate["about-detail"]}
        </p>
      </div>
      <div class="hidden opacity-0" id="goal" role="tabpanel">
        <p class="block font-sans text-base font-light leading-relaxed text-inherit text-blue-gray-500 antialiased">
          {translate["goal-detail"]}
        </p>
      </div>
      <div class="hidden opacity-0" id="contact" role="tabpanel">
        <p class="block font-sans text-base font-light leading-relaxed text-inherit text-blue-gray-500 antialiased">
          {translate["contact-detail"]}
        </p>
      </div>
    </div>
  </div>
</div>

