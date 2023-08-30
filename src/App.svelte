<script>
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  import Menu from '@smui/menu';
  import List, { Item, Text } from '@smui/list';
  import Button, { Label } from '@smui/button';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Tab, { Label as TabLabel } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import language from './lib/language.json'
  import Paper, { Title, Subtitle, Content } from '@smui/paper';

  let menu = Menu;
  let darkmode = false
  let lang = 'en'
  let route = 'goal';

  $: translate = language[lang].translation
</script>

<LayoutGrid>
  <Cell span={6}>
    {translate["headline"]}
    <Button href="https://zummon.page/" target="_blank">
      <Label>{translate["sub-headline"]}</Label>
    </Button>
  </Cell>
  <Cell span={6}>
    <div class="">
      <FormField align="end">
        <Switch bind:checked={darkmode} icons={false} />
        <span slot="label">{translate["toggle-dark-mode"]}</span>
      </FormField>
    </div>
    <div class="">
      {translate["change-language"]}
      <Button on:click={() => {
        menu.setOpen(true)
      }}>
        <Label>{language[lang].name}</Label>
      </Button>
      <Menu bind:this={menu}>
      {#each Object.keys(language) as lng, index (`lang-${index}`)}
        <List>
          <Item on:SMUI:action={() => {
            lang = lng
          }}>
            <Text>{language[lng].name}</Text>
          </Item>
        </List>
        {/each}
      </Menu>
    </div>
  </Cell>
</LayoutGrid>

<Paper>
  <TabBar tabs={['about', 'goal', 'contact']} let:tab bind:route>
    <Tab {tab}>
      <TabLabel>{translate[tab]}</TabLabel>
    </Tab>
  </TabBar>
</Paper>

<Paper >
  {#if route == 'about'}
    <div class="">
      <p class="">{translate["about-detail"]}</p>
    </div>
  {:else if route == 'goal'}
    <div class="">
      <p class="">{translate["goal-detail"]}</p>
    </div>
  {:else if route == 'contact'}
    <div class="">
      <p class="">{translate["contact-detail"]}</p>
    </div>
  {/if}
</Paper>