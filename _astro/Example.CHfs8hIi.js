import{j as e}from"./jsx-runtime.u17CrQMm.js";function i(){return e.jsxs("div",{className:"scrollable relative overflow-auto",children:[e.jsx("div",{className:"scrollable-sentinel"}),e.jsx("style",{children:`
        @scope {
          :scope {
            width: 300px;
            height: 200px;
            overflow: auto;
            border: 1px solid #ccc;
          }
        }
      `}),e.jsx("div",{className:"scrollbar-content",children:e.jsx("textarea",{className:"field-sizing-content overflow-hidden",defaultValue:`
          This is a scrollable textarea. It should have a custom scrollbar that follows the content as you scroll.
          The scrollbar is implemented using pure CSS and the new Scroll-Linked Animations API.

          Write some more text here to make the content longer and enable scrolling.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur tincidunt. Curabitur at ligula nec nisl convallis fermentum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur tincidunt. Curabitur at ligula nec nisl convallis fermentum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur tincidunt. Curabitur at ligula nec nisl convallis fermentum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        `})}),e.jsx("div",{className:"snapbox"}),e.jsx("div",{className:"scrollbar",children:e.jsxs("div",{className:"scrollbar-track",children:[e.jsx("div",{className:"scrollbar-thumb"}),e.jsx("input",{type:"range",className:"scrollbar-input",min:0,max:1,step:.001,onChange:t=>t.target.closest(".scrollable").style.setProperty("--scroll-input",t.target.value)})]})})]})}export{i as Example};
