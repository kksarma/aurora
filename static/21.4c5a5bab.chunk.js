webpackJsonp([21],{1085:function(e,n,t){var o=t(0),a=t(61),r=t(16).PageRenderer;r.__esModule&&(r=r.default);var i=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(1107)}},componentWillMount:function(){},render:function(){return o.createElement(r,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,e.exports=i},1107:function(e,n){e.exports='### BottomSheet\n\nBottomSheet component.\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: children\n    Type: node\n    Default:\n    Notes: Render as the BottomSheet\'s children\n  - Prop: withCancelBtn\n    Type: boolean\n    Default: "true"\n    Notes: Dictates whether to render the CancelButton\n  - Prop: withHeader\n    Type: boolean\n    Default: "true"\n    Notes: Dictates whether to render the HeaderRow\n  - Prop: label\n    Type: String\n    Default: ""\n    Notes: Optional\n  - Prop: labelVariant\n    Type: String\n    Default: "\'default\'"\n    Notes: Determines label style variant. Possible variants are `default`, `positive`, `alert`\n  - Prop: ...props\n    Type: any\n    Default:\n    Notes: Passes through any other props to underlying BottomSheetContent\n```\n\n```react\nresponsive: true\n---\n<TransitionGroup component={Backdrop} appear>\n  <CSSTransition\n    classNames="bottom-sheet"\n    timeout={300}\n  >\n    <BottomSheet label={"On sale: MON \\u2022 AUG 27 \\u2022 10 AM"} labelVariant="positive">\n      <ListRowOverflow>\n        {sections.map(section =>\n          <Section title={section.title} noOfColumns={MAX_COLUMNS / sections.length} key={section.key}>\n            {section.items.map(item =>\n            <SectionItem item={item} key={item.title}/>)}\n          </Section>\n        )}\n      </ListRowOverflow>\n    </BottomSheet>\n  </CSSTransition>\n</TransitionGroup>\n```\n'}});
//# sourceMappingURL=21.4c5a5bab.chunk.js.map