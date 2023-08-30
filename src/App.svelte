<script>
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  import Menu from '@smui/menu';
  import List, { Item, Text } from '@smui/list';
  import Button, { Label } from '@smui/button';
  import language from './lib/language.json'

  let menu = Menu;
  let darkmode = false
  let lang = 'en'
  let clicked = 'nothing yet';

  $: translate = language[lang].translation
</script>

  <FormField align="end">
    <Switch bind:checked={darkmode} icons={false} />
    <span slot="label">{translate["toggle-dark-mode"]}</span>
  </FormField>

<div class="">
  {translate["change-language"]}
  <Button on:click={() => {
    menu.setOpen(true)
  }}>
    <Label>{language[lang].name}</Label>
  </Button>
  <Menu bind:this={menu}>
  {#each Object.keys(language) as lng,index(`lang-${index}`)}
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