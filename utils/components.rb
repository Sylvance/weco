require 'erb'
require 'fileutils'

# Define the list of HTML tags that are not deprecated
html_tags = [
    ["a", "anchor"],
    ["abbr", "abbreviation"],
    ["address", "address"],
    ["area", "image-map-area"],
    ["article", "article-content"],
    ["aside", "aside-content"],
    ["audio", "audio-content"],
    ["b", "bold-text"],
    ["base", "document-base-url"],
    ["bdi", "bi-directional-isolation"],
    ["bdo", "bi-directional-override"],
    ["blockquote", "block-quotation"],
    ["body", "document-body"],
    ["br", "line-break"],
    ["button", "button"],
    ["canvas", "drawing-canvas"],
    ["caption", "table-caption"],
    ["cite", "citation"],
    ["code", "code-text"],
    ["col", "table-column"],
    ["colgroup", "table-column-group"],
    ["data", "machine-readable-data"],
    ["datalist", "data-list"],
    ["dd", "definition-description"],
    ["del", "deleted-text"],
    ["details", "disclosure-widget"],
    ["dfn", "definition-term"],
    ["dialog", "dialog-box"],
    ["div", "container-divider"],
    ["dl", "definition-list"],
    ["dt", "definition-term"],
    ["em", "emphasis-text"],
    ["embed", "external-content"],
    ["fieldset", "field-set"],
    ["figcaption", "figure-caption"],
    ["figure", "figure"],
    ["footer", "footer"],
    ["form", "form"],
    ["h1", "heading-one"],
    ["h2", "heading-two"],
    ["h3", "heading-three"],
    ["h4", "heading-four"],
    ["h5", "heading-five"],
    ["h6", "heading-six"],
    ["head", "document-head"],
    ["header", "header"],
    ["hr", "horizontal-rule"],
    ["html", "html-document"],
    ["i", "italic-text"],
    ["iframe", "inline-frame"],
    ["img", "image"],
    ["input", "input-control"],
    ["ins", "inserted-text"],
    ["kbd", "keyboard-input"],
    ["label", "form-label"],
    ["legend", "field-set-legend"],
    ["li", "list-item"],
    ["link", "document-link"],
    ["main", "main-content"],
    ["map", "image-map"],
    ["mark", "marked-text"],
    ["meta", "metadata"],
    ["meter", "scalar-measurement"],
    ["nav", "navigation-links"],
    ["noscript", "no-script-section"],
    ["object", "embedded-object"],
    ["ol", "ordered-list"],
    ["optgroup", "option-group"],
    ["option", "selectable-option"],
    ["output", "output-value"],
    ["p", "paragraph"],
    ["param", "parameter"],
    ["picture", "image-container"],
    ["pre", "preformatted-text"],
    ["progress", "progress-bar"],
    ["q", "short-quotation"],
    ["rp", "ruby-parenthesis"],
    ["rt", "ruby-text"],
    ["ruby", "ruby-annotation"],
    ["s", "strikethrough-text"],
    ["samp", "sample-output"],
    ["script", "script"],
    ["section", "section-container"],
    ["select", "option-selector"],
    ["small", "small-text"],
    ["source", "media-resource"],
    ["span", "inline-container"],
    ["strong", "strong-text"],
    ["style", "style-information"],
    ["sub", "subscript-text"],
    ["summary", "summary"],
    ["sup", "superscript-text"],
    ["table", "table"],
    ["tbody", "table-body"],
    ["td", "table-data-cell"],
    ["template", "template"],
    ["textarea", "text-area"],
    ["tfoot", "table-footer-group"],
    ["th", "table-header-cell"],
    ["thead", "table-header-group"],
    ["time", "date-time"],
    ["title", "document-title"],
    ["tr", "table-row"],
    ["track", "media-text-track"],
    ["u", "underlined-text"],
    ["ul", "unordered-list"],
    ["var", "variable"],
    ["video", "video-content"],
    ["wbr", "word-break-opportunity"]
]

def to_pascal_case(str)
  words = str.split('-').map(&:capitalize)
  # Join the capitalized words without spaces
  pascal_case_str = words.join('')
  pascal_case_str
end

# ERB template for the JavaScript code
template = ERB.new(File.read('component_template.erb'))

# Create a "components" directory if it doesn't exist
FileUtils.mkdir_p('components')

# Iterate over each HTML tag and generate a JavaScript file
html_tags.each do |tag|
  # Create a filename based on the HTML tag name
  filename = "components/#{tag[1]}-tag.js"

  # Define the class name for the web component (e.g., MyComponentTag)
  class_name = to_pascal_case(tag[1]) + 'Tag'
  html_tag = tag[0]

  # Render the ERB template with the class name and tag name
  js_code = template.result(binding)

  # Write the JavaScript code to the file
  File.write(filename, js_code)

  puts "Generated #{filename}"
end

puts 'JavaScript files generated successfully!'
