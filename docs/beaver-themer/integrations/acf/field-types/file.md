---
id: file
title: File field
sidebar_label: File
---

The Advanced Custom Fields (ACF) File field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your File field in ACF and use the shortcode to display the File field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Header, HTML, Button or Text module.

## Shortcode

Here is an example of the Beaver Themer File field connection shortcode.

```markup
[wpbb post:acf type='file' name='']
```

The `name=''` attribute is where you enter your File field name.

## Options Page

The Beaver Themer File field connection shortcode also supports File fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='file' name='']
```
