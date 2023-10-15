<script>
  import language from './language.json'

  let darkmode = false
  let lang = 'en'
  let showSetLang = true
  let route = 'goal';

  $: translate = language[lang].translation
  $: document.documentElement.classList.toggle('dark', darkmode)
</script>

<svelte:head>
  <link href={language[lang].fontFamilySrc} rel="stylesheet">
</svelte:head>

<div class="" style:font-family={language[lang].fontFamily}>
  <div class="flex flex-wrap justify-between items-baseline p-4 mx-auto max-w-3xl gap-4">
    <div class="">
      <h2 class="block text-4xl font-semibold leading-[1.3] tracking-normal text-inherit antialiased mb-2">
        {translate["headline"]}
      </h2>
      <a
        class="middle none center rounded-lg py-3 px-2 font-bold text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-dark="true"
        href="https://zummon.page/" 
        target="_blank"
      >
        {translate["sub-headline"]}
      </a>
    </div>
    <div class="grow flex flex-col items-end">
      <div class="mr-4">
        <div class="inline-flex items-center">
          <label
            class="mt-px mr-3 mb-0 cursor-pointer select-none font-light"
            for="setting-dark-mode"
          >
            {translate["toggle-dark-mode"]}
          </label>
          <div class="relative inline-block h-4 w-8 cursor-pointer rounded-full">
            <input
              class="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-pink-500 peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
              type="checkbox"
              id="setting-dark-mode"
              bind:checked={darkmode}
            />
            <label
              class="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
              for="setting-dark-mode"
            >
              <div
                class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                data-ripple-dark="true"
              ></div>
            </label>
          </div>
        </div>
      </div>
      <div class="mr-4">
        <div class="">
          <button
            class="inline-flex items-center"
            data-popover-target="setting-lang"
            on:click={() => { 
              showSetLang = !showSetLang
            }}
          >
            <span class="">
              {translate["change-language"]}
            </span>
            <span 
              class="middle none center rounded-lg py-3 px-2 font-bold text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              {language[lang].name}
            </span>
          </button>
          <ul
            class="absolute z-50 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none dark:bg-gray-900 dark:border-gray-800"
            class:hidden={showSetLang}
            role="menu"
            id="setting-lang"
            data-popover="setting-lang"
            data-popover-placement="bottom"
          >
            {#each Object.keys(language) as value, index (`lang-${index}`)}
              <li
                class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 dark:bg-gray-900 dark:text-gray-50"
                role="menuitem"
                on:keydown={() => {}}
                on:click={() => {
                  lang = value
                  showSetLang = true
                }}
              >
                {language[value].name}
              </li>
            {/each}
          </ul>
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
            on:click={() => {
              route = "about"
            }}
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
            on:click={() => {
              route = "goal"
            }}
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
            on:click={() => {
              route = "contact"
            }}
          >
            <span class="ml-1">{translate['contact']}</span>
          </button>
        </li>
      </ul>
      <div class="p-5" data-tab-content="">
        <div class={route == 'about' ? 'block opacity-100' : 'hidden opacity-0'} id="about" role="tabpanel">
          <p class="block text-base font-light leading-relaxed text-inherit text-blue-gray-500 antialiased">
            {translate["about-detail"]}
          </p>
        </div>
        <div class={route == 'goal' ? 'block opacity-100' : 'hidden opacity-0'} id="goal" role="tabpanel">
          <p class="block text-base font-light leading-relaxed text-inherit text-blue-gray-500 antialiased">
            {translate["goal-detail"]}
          </p>
        </div>
        <div class={route == 'contact' ? 'block opacity-100' : 'hidden opacity-0'} id="contact" role="tabpanel">
          <p class="block text-base font-light leading-relaxed text-inherit text-blue-gray-500 antialiased">
            {translate["contact-detail"]}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>