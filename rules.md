---
layout: page
title: Rules
---  

## Submit VMs

- Do `not` use `content` on the VM that may `offend` other `people`.
- Do `not` use an `external URL` to resolve the VM. (In case the link is down, the machine cannot be resolved).
- The VM does `not` have to have a `graphical interface "GUI"` (Unless necessary to resolve the VM).
- `Delete` or `redirect` any `history` files to `/dev/null` (Unless necessary to resolve the VM.).
- The VM has to have a logic from the beginning to the end.
- The creator has to test the VM to avoid possible bugs.
- The VM has to work correctly in `VirtualBox`.
- The VM must have the `flags`: (`user.txt` & `root.txt`) located in `/home/[user]/user.txt` & `/root/root.txt`.
- If the VM requires a `brute force attack`, enter a `password` that does `not exceed the first 5000 lines` of `rockyou.txt` (To avoid unnecessary long waits).
- If the VM requires a `domain`/`subdomain` it has to be `.nyx` (example: `domain.nyx`/`subdomain.domain.nyx`).
- We do `not accept VM` that are on `other platforms` (The only reason is because we want to have our own machines).

## Submit Writeup

- Do `not show` the `user.txt`/`root.txt` flags.
  
## Pull Request (Optional)

After acceptance of your machine, if you want to appear as a <a href="https://github.com/vulnyx/vulnyx.github.io/graphs/contributors" target="_blank">`collaborator`</a> in the official <a href="https://github.com/VulNyx/vulnyx.github.io" target="_blank">`repository`</a> you can do it as follows:

1. Go to <a href="https://github.com/VulNyx/vulnyx.github.io/tree/main/_vms" target="_blank">`_vms/`</a>
2. Click "`Add File`"
3. Click "`Create New File`" create a file with the `name` of your `machine` with extension `.md` (example: `Blog.md`)

Edit this template with your data:

```
---
level:
  Easy:
    -
creator:
  d4t4s3c:
    -
tested:
  VirtualBox:
    -
download:
  url-blog:
    -
md5:
  md5-blog:
    -
writeup:
  writeup-blog:
    -
---
```

The other missing information will be filled in by the <a href="https://vulnyx.com" target="_blank">`VulNyx`</a> team.

<footer>
  <p>© VulNyx 2023</p>
</footer>
