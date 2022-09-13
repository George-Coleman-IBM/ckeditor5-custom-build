/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";

class Editor extends ClassicEditor {}

const customColorPalette = [
  {
    color: "hsl(0, 0%, 0%)",
    label: "Black",
  },
  {
    color: "hsl(4, 100%, 100%)",
    label: "White",
  },
  {
    color: "hsl(199, 30%, 59%)",
    label: "Blue Grey",
  },
  {
    color: "hsl(0, 0%, 50%)",
    label: "Grey",
  },
  {
    color: "hsl(0, 0%, 24%)",
    label: "Dim Grey",
  },
  {
    color: "hsl(0, 59%, 41%)",
    label: "Brown",
  },
  {
    color: "hsl(14, 89%, 48%)",
    label: "Deep Orange",
  },
  {
    color: "hsl(26, 86%, 68%)",
    label: "Orange",
  },
  {
    color: "hsl(25, 87%, 91%)",
    label: "Light Orange",
  },
  {
    color: "hsl(45, 100%, 50%)",
    label: "Amber",
  },
  {
    color: "hsl(57, 95%, 59%)",
    label: "Yellow",
  },
  {
    color: "hsl(126, 70%, 33%)",
    label: "Green",
  },
  {
    color: "hsl(137, 62%, 65%)",
    label: "Green 1",
  },
  {
    color: "hsl(77, 70%, 51%)",
    label: "Lime",
  },
  {
    color: "hsl(137, 62%, 90%)",
    label: "Light Green",
  },
  {
    color: "hsl(180, 68%, 86%)",
    label: "Light Green 1",
  },
  {
    color: "hsl(216, 100%, 95%)",
    label: "Light Green 2",
  },
  {
    color: "hsl(159, 29%, 38%)",
    label: "Teal",
  },
  {
    color: "hsl(4, 90%, 58%)",
    label: "Red",
  },
  {
    color: "hsl(348, 78%, 56%)",
    label: "Hot Red",
  },
  {
    color: "hsl(355, 89%, 93%)",
    label: "Pink",
  },
  {
    color: "hsl(332, 90%, 84%)",
    label: "Pink 1",
  },
  {
    color: "hsl(330, 100%, 98%)",
    label: "Light Pink",
  },
  {
    color: "hsl(357, 92%, 75%)",
    label: "Hot Pink",
  },
  {
    color: "hsl(331, 92%, 95%)",
    label: "Rose Pink",
  },
  {
    color: "hsl(291, 64%, 42%)",
    label: "Purple",
  },
  {
    color: "hsl(262, 52%, 47%)",
    label: "Deep Purple",
  },
  {
    color: "hsl(266, 100%, 99%)",
    label: "Light Purple",
  },
  {
    color: "hsl(261, 100%, 96%)",
    label: "Light Purple 1",
  },
  {
    color: "hsl(231, 48%, 48%)",
    label: "Indigo",
  },
  {
    color: "hsl(207, 90%, 54%)",
    label: "Blue",
  },
  {
    color: "hsl(218, 100%, 74%)",
    label: "Blue 1",
  },
  {
    color: "hsl(217, 100%, 97%)",
    label: "Light Blue",
  },
  {
    color: "hsl(203, 100%, 93%)",
    label: "Light Blue 1",
  },
  {
    color: "hsl(179, 69%, 55%)",
    label: "Turquoise",
  },

  // ...
];

// Plugins to include in the build.
Editor.builtinPlugins = [
  Autoformat,
  Base64UploadAdapter,
  BlockQuote,
  Bold,
  CloudServices,
  Essentials,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  TextTransformation,
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "|",
      "imageUpload",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "undo",
      "redo",
      "fontColor",
      "fontSize",
      "fontFamily",
    ],
  },
  language: "en-gb",
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
      "tableProperties",
    ],

    tableProperties: {
      borderColors: customColorPalette,
      backgroundColors: customColorPalette,
    },

    // Set the palettes for table cells.
    tableCellProperties: {
      borderColors: customColorPalette,
      backgroundColors: customColorPalette,
    },
  },
};

export default Editor;
