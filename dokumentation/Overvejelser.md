# dkfds-vue3 Overvejelser

## Links


fds-link autodetect extern link ?



```html

// local rute
<fds-link @click="router.push(x)">
Gå til Forside  
</fds-link>

// ekstern vindue
<fds-link href="https://google.com">
Gå til Forside  
</fds-link>


// valgfri ikon
<fds-link href="https://google.com" icon="home">
Gå til Forside  
</fds-link>
```

## Manuel tilgang - venstremenu og trin

Overvej at, også, tilbyde en mere manuel tilgang til hhv venstremenu og trin m.fl.
Istedet for at give en liste med, give muligfor at direkte at skrive sit "a" tag.

```html

<fds-trinindikator
        @navigate="trinNavKey = $event">
        
  <template v-slot:[`0`]> 
    <a href='#' role='menuitem'>
      <span class='sidenav-number'>1.</span>
      <span class='sidenav-title'>Lorem ipsum</span>
      <span class='sidenav-icon'>
        <svg class='icon-svg' aria-hidden='true' focusable='false' tabindex='-1'>
          <use xlink:href='#done'></use>
        </svg>
      </span>
    </a>
  </template>
  <template v-slot:[`1`]> 
    <a href='#' role='menuitem'>
      <span class='sidenav-number'>2.</span>
      <span class='sidenav-title'>Lorem ipsum</span>
      <span class='sidenav-icon'>
        <svg class='icon-svg' aria-hidden='true' focusable='false' tabindex='-1'>
          <use xlink:href='#done'></use>
        </svg>
      </span>
    </a>
  </template>
</fds-trinindikator>

```



## Layout
Forslag til hvordan layout/implementering kunne laves?

```html
// ? Kan det lade sig gøre - eftersom det er op til bruger selv at importe virk eller borger
<fds theme="virk/borger"> 
    <fds-headers>
        // Indsætter auto skip link til main
        // 2 obligatoriske headers
        // 3 valgfri
        ...
        <fds-header-1>
            // logo og logud knap (portal info)
        </fds-header-1>
        <fds-header-2>
            // titel og myndighed (solution info)
        </fds-header-2>
        <fds-header-navigation>
            // Auto gen af responsive menu
            <fds-nav-item-route
                toName="forside"
                linkTitle="Link title">
                Forside
            </fds-nav-item-route>
            <fds-nav-item-route
                toName="side2"
                linkTitle="Side 2 Link title">
                Side 2
            </fds-nav-item-route>
        <fds-header-navigation>
    </fds-headers>
    <main />
    <fds-footer>
    ...
    </fds-footer>
    <fds-cookies />
<fds>

