require 'kramdown/converter/html'

module StandaloneImagesAndLinks
  def convert_p(el, indent)
    return super unless el.children.size == 1 && ((el.children.first.type == :img || (el.children.first.type == :html_element && el.children.first.value == "img")) || (el.children.first.type == :a || (el.children.first.type == :html_element && el.children.first.value == "a")))
    convert(el.children.first, indent)
  end
end

Kramdown::Converter::Html.prepend StandaloneImagesAndLinks